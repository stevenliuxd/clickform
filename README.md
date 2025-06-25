# Clickform

A simple VS Code extension that detects terraform module source links and makes them clickable. Clicking a link opens the corresponding GitHub page in your browser.

## Features

- **Detects** module `source` lines in Terraform files that use GitHub URLs (e.g., `git@github.com:org/repo//path`).
- **Makes links clickable** directly in the editor.
- **Opens the corresponding GitHub page** in your default browser.

## Example

```hcl
module "vpc" {
  source = "git@github.com:hashicorp/example-modules//vpc"
}
```

## Installation
This extension can be installed through the VS Code marketplace.
## Notes

Currently, the URL is constructed as:  
`https://github.com/${org}/${repo}/tree/master/${path}`

This extension was created for a specific use case; feel free to fork and adapt it to your needs.

GitHub repository: [https://github.com/stevenliuxd/clickform](https://github.com/stevenliuxd/clickform)
