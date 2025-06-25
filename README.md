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
Currently the URL is hardcoded to use `https://github.com/${org}/${repo}/tree/master/${path}`. Feel free to fork this for your own specific usecase.
