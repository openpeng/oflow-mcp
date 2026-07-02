# Basic lifecycle example

This example walks through a minimal `basic-dev` workflow run through the MCP tools exposed by `oflow-mcp`.

## 1. Configure the MCP server

Build the project first:

```bash
npm install
npm run build
```

Example MCP configuration:

```json
{
  "mcpServers": {
    "oflow-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/oflow-mcp/dist/index.js"],
      "env": {
        "OFLOW_MCP_FLOWS_DIR": "/absolute/path/to/oflow-mcp/flows",
        "OFLOW_MCP_DATA_DIR": "/tmp/oflow-mcp-instances"
      }
    }
  }
}
```

## 2. List templates

Call `workflow_list_templates`:

```json
{}
```

Expected result includes:

```json
{
  "ok": true,
  "data": {
    "templates": [
      {
        "name": "basic-dev",
        "description": "Minimal Agent-native development workflow",
        "step_count": 3
      }
    ]
  }
}
```

## 3. Start a workflow

Call `workflow_start`:

```json
{
  "template": "basic-dev",
  "params": {
    "change_name": "demo change"
  },
  "alias": "demo-basic-dev"
}
```

The response returns `instance_id`, the first step, and the rendered prompt.

## 4. Inspect dashboard

Call `workflow_dashboard`:

```json
{
  "instance_id": "demo-basic-dev",
  "include_prompt": true,
  "include_recent_events": true,
  "include_inbox": true
}
```

Use `suggested_actions` and `checkpoint.blocking_reasons` to decide what output or evidence is still missing.

## 5. Advance the analyze step

Call `workflow_advance`:

```json
{
  "instance_id": "demo-basic-dev",
  "outputs": {
    "analysis_summary": "The requested demo change has been analyzed and is safe to design."
  },
  "confirmed_conditions": ["analysis_summary has been produced"],
  "token_consumed": 1000
}
```

The response returns the next step and prompt.

## 6. Advance the design step

```json
{
  "instance_id": "demo-basic-dev",
  "outputs": {
    "design_summary": "Implement the demo change with a small isolated update and verify it with tests."
  },
  "confirmed_conditions": ["design_summary has been produced"],
  "token_consumed": 1000
}
```

## 7. Complete verification

```json
{
  "instance_id": "demo-basic-dev",
  "outputs": {
    "verification_result": "PASS"
  },
  "confirmed_conditions": ["verification_result has been produced"],
  "token_consumed": 500
}
```

Expected result:

```json
{
  "ok": true,
  "data": {
    "completed": true,
    "status": "completed"
  }
}
```

## 8. Generate a worklog

Call `workflow_worklog`:

```json
{
  "instance_id": "demo-basic-dev",
  "mode": "handoff"
}
```

Use `mode: "full"` when you need the event timeline and validation failure details.
