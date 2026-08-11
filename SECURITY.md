# Security Policy

## Supported Versions

This repository contains the source code for the GitHub Pages website hosted at:

`https://shivduttchoubey.github.io/`

Security fixes are generally applied to the latest version of the website and the default branch of this repository.

| Version                  | Supported |
| ------------------------ | --------- |
| Latest / default branch  | ✅         |
| Older commits / versions | ❌         |

## Reporting a Vulnerability

If you discover a security vulnerability in this repository or the website, please report it responsibly.

### Preferred Method

Please use **GitHub's private vulnerability reporting** feature for this repository, if available.

This allows security issues to be reported privately to the repository maintainers without exposing sensitive information publicly.

### If Private Reporting Is Unavailable

Please contact the repository maintainer privately through an appropriate GitHub contact method.

**Do not create a public GitHub issue containing:**

* Exploit code or proof-of-concept code
* Credentials, tokens, API keys, or other secrets
* Personally identifiable information
* Detailed instructions for exploiting a vulnerability
* Any other information that could put users or the website at risk

If you need to create an issue to establish contact because no private reporting method is available, keep the issue generic and do not disclose the vulnerability details.

## What to Include

A useful security report should contain, where possible:

* A clear description of the vulnerability
* The affected page, file, component, or functionality
* Steps to reproduce the issue
* The potential security impact
* Proof-of-concept or screenshots, where safe to provide
* Suggested remediation, if known

Please avoid including real credentials, private information, or destructive payloads in a report.

## Response Process

After receiving a security report, the maintainer will:

1. Acknowledge receipt of the report when reasonably possible.
2. Review and attempt to reproduce the reported issue.
3. Assess its security impact and severity.
4. Work on an appropriate fix or mitigation.
5. Deploy the fix when practical.
6. Coordinate public disclosure when appropriate.

Security reports will be handled confidentially to the extent reasonably possible.

## Disclosure Policy

Please allow reasonable time for the vulnerability to be investigated and, where applicable, fixed before publicly disclosing the issue.

The maintainer may publish a security advisory or other notice when appropriate, including relevant information about the impact and remediation.

Researchers who responsibly report valid security vulnerabilities may be credited in a security advisory or release notes, unless they prefer to remain anonymous.

## Scope

This policy covers security vulnerabilities affecting:

* The source code in this repository
* The deployed GitHub Pages website
* Client-side JavaScript, HTML, and CSS security issues
* Repository configuration that could directly affect website security
* Dependencies or third-party components included in the project
* Accidental exposure of secrets or sensitive configuration committed to the repository

Issues that are purely cosmetic, general website bugs, feature requests, or non-security-related problems should be reported through regular GitHub issues.

## Out of Scope

The following are generally outside the scope of this security policy:

* Vulnerabilities in GitHub's infrastructure or GitHub.com itself
* Denial-of-service attacks against GitHub or third-party infrastructure
* Social engineering, phishing, or attacks against repository contributors
* Issues requiring physical access to another person's device or account
* Spam or content-related issues without a security impact

For vulnerabilities in GitHub itself, please use GitHub's own coordinated disclosure process.

## Security Best Practices for Contributors

Contributors should:

* Never commit passwords, API keys, access tokens, private keys, or other secrets.
* Avoid storing sensitive personal information in the repository.
* Keep third-party dependencies reasonably up to date.
* Review changes for security implications before submitting pull requests.
* Use environment-specific or repository-managed secrets where secrets are genuinely required.
* Report accidentally committed secrets immediately so they can be revoked and removed from the repository history where appropriate.

## Acknowledgements

We appreciate responsible security researchers and contributors who help improve the security of this project.

Thank you for helping keep this website and its users safe.
