# Translation Workflows Setup

This project uses two GitHub Actions workflows to manage translations with SimpleLocalize:

## Workflows

### 1. Upload Workflow (`app-to-simplelocalize-sync.yml`)
- **Trigger**: Push/PR to master branch, manual dispatch
- **Purpose**: Upload source translations to SimpleLocalize and auto-translate
- **Actions**:
  - Preview upload (dry run)
  - Upload translation files
  - Auto-translate missing translations
  - Display summary

### 2. Download Workflow (`simplelocalize-download-sync.yml`)
- **Trigger**: Daily at 2 AM UTC, manual dispatch
- **Purpose**: Download updated translations and create PR if changes exist
- **Actions**:
  - Download translations with `IMPORT_ORDER` sorting and `WRITE_NESTED` options
  - Check for differences
  - Create PR with detailed change summary if differences found

## Required Secrets

Add these secrets to your GitHub repository settings:

1. **`SIMPLELOCALIZE_API_KEY`**
   - Your SimpleLocalize API key
   - Get it from: SimpleLocalize Dashboard → Settings → API Keys
   - Used by both workflows

## File Structure

```
src/assets/i18n/
├── en-gb.json    # Source language (English GB)
├── de-de.json    # German translations
├── es-es.json    # Spanish translations
├── fr-fr.json    # French translations
└── ...           # Other language files
```

## Download Options Explained

- `--downloadSort IMPORT_ORDER`: Maintains the order keys were imported/uploaded
- `--downloadOptions WRITE_NESTED`: Creates nested JSON structure for better organization

## Manual Triggering

Both workflows can be manually triggered:
1. Go to Actions tab in GitHub
2. Select the workflow
3. Click "Run workflow"
4. Choose branch and click "Run workflow"

## PR Review Process

When the download workflow creates a PR:
1. Review translation changes carefully
2. Test translations in your application
3. Check for any formatting issues
4. Merge when satisfied with changes

## Troubleshooting

- **API Key Issues**: Ensure `SIMPLELOCALIZE_API_KEY` secret is set correctly
- **No Changes**: Download workflow only creates PR when translations differ
- **Permission Issues**: Ensure GitHub token has proper repository permissions
