# Getting Started
This is a boiler plate for express.

## Installation

```bash
# Clone the repo
git clone <url>

# Install dependencies
npm install

# Start development
npm run dev
```

# Comit rules
The commit rules are based on the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. The commit message should be structured as follows:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Type
The type must be one of the following:
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope
The scope should be the name of the package affected (as perceived by the person reading the changelog generated from commit messages).

### Description
The description must be clear and concise.

### Body
The body must include the motivation for the change and contrast this with previous behavior.

### Footer
The footer must include any breaking changes and a reference to a GitHub issue if any.
