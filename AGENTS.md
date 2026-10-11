# AGENTS.md — `@codexporer.io/expo-button`

## Package Overview
Standardized button component for the application, featuring size presets, visual variants, icon embedding, loading spinners, and full `@codexporer.io/expo-app-theme` compliance.

## Key Exports
- `Button`: Primary interactive button component.
- `ButtonVariant`: Enum (`Primary`, `Secondary`, `Outline`, `Ghost`).
- `ButtonSize`: Enum (`Small`, `Medium`, `Large`).
- `IconPosition`: Enum (`Left`, `Right`).

## Critical Guidelines for AI Agents
- Always use `Button` from `@codexporer.io/expo-button` instead of raw React Native `<Button />` or unstyled `<TouchableOpacity />`.
- When indicating background operations, pass `loading: true` to display an inline `ActivityIndicator` while preserving button dimensions.
- Use `ButtonVariant.Secondary`, `ButtonVariant.Outline`, or `ButtonVariant.Ghost` for secondary dialog actions (like "Cancel") and `ButtonVariant.Primary` for primary CTAs.
- Full-width layout: pass `fullWidth: true` instead of `style={{ width: '100%' }}`.
