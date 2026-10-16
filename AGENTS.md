# AGENTS.md — `@codexporer.io/expo-button`

## Package Overview
Standardized, theme-aware button component for the application, featuring size presets, visual variants, render-prop icon embedding, optional subtitles, and theme integration via `@codexporer.io/expo-app-theme`.

## Peer Dependencies
All peer dependencies must be installed in consuming projects:
- `react`: `*`
- `react-native`: `*`
- `@codexporer.io/expo-app-theme`: `*`

## Key Exports
- `Button` (also `default` export): Interactive button component extending `TouchableOpacityProps` (except `style`).
- `ButtonVariant`: Enum (`Primary = 'primary'`, `Secondary = 'secondary'`, `Outline = 'outline'`, `Ghost = 'ghost'`). Default is `ButtonVariant.Secondary`.
- `ButtonSize`: Enum (`Small = 'small'`, `Medium = 'medium'`, `Large = 'large'`). Default is `ButtonSize.Large`.
- `IconPosition`: Enum (`Left = 'left'`, `Right = 'right'`). Default is `IconPosition.Left`.
- `ButtonProps`: TypeScript interface for button component properties.
- `IconProps`: TypeScript interface `{ size: number; color: string; }` passed to the `icon` render callback.

## Critical Guidelines for AI Agents
- **ThemeProvider Requirement**: `Button` calls `useAppTheme()` to compute variant colors. It must always be mounted within a `<ThemeProvider>` from `@codexporer.io/expo-app-theme`.
- **Icon Render Callback**: The `icon` prop is a function `(props: IconProps) => React.ReactNode`, NOT a JSX element. Example: `icon={({ size, color }) => <MaterialIcons name="add" size={size} color={color} />}`.
- **NO `loading` or `fullWidth` Props**: The component does not have `loading` or `fullWidth` props:
  - For full-width buttons, apply `style={{ width: '100%' }}` or rely on flex layout (e.g., `alignSelf: 'stretch'`).
  - To render custom loading indicators, pass an `ActivityIndicator` as `children` with `title` omitted or use an icon render function.
- **Subtitles**: When supplementary text is needed below the label, use `subtitle="Detail text"` and optional `subtitleStyle`.
- **Default Variant & Size**: If not specified, `variant` defaults to `ButtonVariant.Secondary` and `size` defaults to `ButtonSize.Large`. Use `ButtonVariant.Primary` for the main call to action on a screen.
- **Disabled State**: Setting `disabled={true}` automatically handles touch prevention and dims opacity to 0.5. Custom opacities can be configured with `activeOpacity` (default: 0.7).
