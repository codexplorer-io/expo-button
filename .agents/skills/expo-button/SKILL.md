---
name: expo-button
description: Instructions and guidelines for using @codexporer.io/expo-button (Expo Button) in React Native and Expo applications.
---

# `@codexporer.io/expo-button` Skill

## Overview
`@codexporer.io/expo-button` provides a themed, accessible button component supporting primary, secondary, outline, and ghost variants with leading/trailing icon render callbacks, subtitles, and size presets via `@codexporer.io/expo-app-theme`.

---

## Peer Dependencies

All peer dependencies must be installed in consuming projects:
- `react`: `*`
- `react-native`: `*`
- `@codexporer.io/expo-app-theme`: `*`

---

## Theme Requirement

`Button` calls `useAppTheme()` internally to resolve colors (`theme.primary`, `theme.surfaceSecondary`, `theme.background`). The consuming application must mount `<ThemeProvider>` from `@codexporer.io/expo-app-theme` higher in the component tree.

---

## When to Use
- All interactive button elements throughout the application.
- Form submit actions, dialog dismissals, and call-to-action triggers.

---

## Usage Example

```tsx
import React from 'react';
import { View } from 'react-native';
import {
  Button,
  ButtonVariant,
  ButtonSize,
  IconPosition
} from '@codexporer.io/expo-button';
import { MaterialIcons } from '@expo/vector-icons';

export function ButtonShowcase() {
  return (
    <View style={{ gap: 12, padding: 16 }}>
      {/* Primary CTA Button */}
      <Button
        title="Save Changes"
        subtitle="Saves progress to cloud"
        variant={ButtonVariant.Primary}
        size={ButtonSize.Large}
        onPress={() => console.log('Save')}
      />

      {/* Outline Button with Render-Prop Icon */}
      <Button
        title="Upload Image"
        variant={ButtonVariant.Outline}
        size={ButtonSize.Medium}
        icon={({ size, color }) => (
          <MaterialIcons name="cloud-upload" size={size} color={color} />
        )}
        iconPosition={IconPosition.Left}
        onPress={() => console.log('Upload')}
      />

      {/* Ghost Button */}
      <Button
        title="Cancel"
        variant={ButtonVariant.Ghost}
        size={ButtonSize.Small}
        onPress={() => console.log('Cancel')}
      />
    </View>
  );
}
```

---

## API Reference

### `<Button />` Props
Extends `Omit<TouchableOpacityProps, 'style'>`:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Button text label |
| `subtitle` | `string` | — | Secondary subtitle text displayed below the title |
| `children` | `React.ReactNode` | — | Custom content rendered when `title` is not provided |
| `onPress` | `() => void` | — | Press callback |
| `variant` | `ButtonVariant` | `ButtonVariant.Secondary` | Visual styling variant (`Primary`, `Secondary`, `Outline`, `Ghost`) |
| `size` | `ButtonSize` | `ButtonSize.Large` | Height and padding preset (`Small`, `Medium`, `Large`) |
| `disabled` | `boolean` | `false` | Disables touch events and lowers opacity to 0.5 |
| `icon` | `(props: IconProps) => React.ReactNode` | — | Render callback providing calculated `size` and `color` |
| `iconPosition` | `IconPosition` | `IconPosition.Left` | Icon placement (`Left` or `Right`) |
| `activeOpacity` | `number` | `0.7` | Opacity on press (inherited from `TouchableOpacityProps`) |
| `style` | `StyleProp<ViewStyle>` | — | Outer container style override |
| `textStyle` | `StyleProp<TextStyle>` | — | Title text style override |
| `subtitleStyle` | `StyleProp<TextStyle>` | — | Subtitle text style override |

### `IconProps`
```typescript
export interface IconProps {
  size: number;
  color: string;
}
```

### Enums

- **`ButtonVariant`**:
  - `Primary = 'primary'`
  - `Secondary = 'secondary'` (Default)
  - `Outline = 'outline'`
  - `Ghost = 'ghost'`
- **`ButtonSize`**:
  - `Small = 'small'` (minHeight: 40, fontSize: 14, iconSize: 18)
  - `Medium = 'medium'` (minHeight: 52, fontSize: 16, iconSize: 22)
  - `Large = 'large'` (minHeight: 64, fontSize: 18, iconSize: 24, Default)
- **`IconPosition`**:
  - `Left = 'left'` (Default)
  - `Right = 'right'`

---

## Critical Rules & Guidelines
1. **ThemeProvider Requirement**: `Button` calls `useAppTheme()` and must be mounted within `<ThemeProvider>`.
2. **Icon Render Prop**: The `icon` prop MUST be a function `({ size, color }) => ReactNode`. Passing a raw JSX element directly will cause a runtime error.
3. **No `loading` or `fullWidth` Props**: Do not pass `loading` or `fullWidth` to `Button`. Use `style={{ width: '100%' }}` for full width, and render custom indicators via `children` or `icon`.
4. **Use Variants Semantically**: Reserve `ButtonVariant.Primary` for the main action per screen/dialog; use `ButtonVariant.Secondary` (default), `Outline`, or `Ghost` for secondary options.
