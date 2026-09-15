# NEXORA — Azure ARM Template Deployment

This project demonstrates the deployment of a web application to Microsoft Azure using an Azure Resource Manager (ARM) template and Azure CLI.

## Project Overview

NEXORA is a SaaS-style web application built with HTML, CSS, and JavaScript.

The deployment follows a practical DevOps workflow:


Local Application
       ↓
GitHub Repository
       ↓
ARM Template
       ↓
Azure Resource Group
       ↓
Azure App Service Plan
       ↓
Azure Web App
       ↓
GitHub Source Control
       ↓
Live Application
```

## Infrastructure

The ARM template creates:

* Azure App Service Plan
* Azure Web App
* GitHub source-control integration

### Azure Resources

| Resource         | Name               |
| ---------------- | ------------------ |
| Resource Group   | NEXORA-RG          |
| App Service Plan | NEXORA-Plan        |
| Web App          | nexora-web-84721   |
| Region           | South Africa North |
| App Service SKU  | B1                 |

## Files

### `template.json`

Reusable ARM infrastructure template that defines the Azure resources required to host the application.

### `parameters.json`

Contains project-specific deployment values such as:

* Web App name
* App Service Plan name
* Azure region
* App Service SKU
* GitHub repository URL

The template can be reused for other web applications by providing different parameter values.

## Deployment

The infrastructure was validated using Azure CLI:

```bash
az deployment group validate \
  --resource-group NEXORA-RG \
  --template-file template.json \
  --parameters parameters.json
```

After successful validation, the infrastructure was deployed using:

```bash
az deployment group create \
  --resource-group NEXORA-RG \
  --template-file template.json \
  --parameters parameters.json
```

## Verification

The deployment was verified using Azure CLI:

```bash
az resource list \
  --resource-group NEXORA-RG \
  --query "[].{Name:name,Type:type,Location:location}" \
  --output table
```

The deployed application was then accessed through its Azure App Service hostname.

## Key Learning

This project demonstrates how Infrastructure as Code can be used to make Azure infrastructure repeatable and reusable.

Instead of manually creating each Azure resource through the portal, the infrastructure is defined in an ARM template and deployed using Azure CLI.

The separation between `template.json` and `parameters.json` also allows the same infrastructure blueprint to be reused for different applications and environments.
