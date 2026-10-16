# `@codexporer.io/expo-button`

A customizable, theme-aware button component for React Native and Expo applications with multiple design variants, sizing options, icon placements, and dynamic color integration via `@codexporer.io/expo-app-theme`.

---

## Peer Dependencies

All peer dependencies must be installed in consuming projects:
- `react`: `*`
- `react-native`: `*`
- `@codexporer.io/expo-app-theme`: `*`

---

## Installation

```bash
yarn add @codexporer.io/expo-button
```

---

## Theme Requirement

`Button` calls `useAppTheme()` internally to resolve colors (`theme.primary`, `theme.surfaceSecondary`, `theme.background`). The consuming application must mount `<ThemeProvider>` from `@codexporer.io/expo-app-theme` higher in the component tree, or an error will be thrown.

---

## Quick Start

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  ButtonVariant,
  ButtonSize,
  IconPosition
} from '@codexporer.io/expo-button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ButtonDemo() {
  return (
    <View style={styles.container}>
      {/* Primary Button */}
      <Button
        title="Get Started"
        variant={ButtonVariant.Primary}
        size={ButtonSize.Large}
        onPress={() => console.log('Primary')}
      />

      {/* Secondary Button with Icon */}
      <Button
        title="Add Track"
        variant={ButtonVariant.Secondary}
        size={ButtonSize.Medium}
        icon={({ size, color }) => (
          <MaterialCommunityIcons name="plus" size={size} color={color} />
        )}
        iconPosition={IconPosition.Left}
        onPress={() => console.log('Secondary with icon')}
      />

      {/* Outline Button */}
      <Button
        title="Settings"
        variant={ButtonVariant.Outline}
        size={ButtonSize.Small}
        onPress={() => console.log('Outline')}
      />

      {/* Ghost Button */}
      <Button
        title="Cancel"
        variant={ButtonVariant.Ghost}
        size={ButtonSize.Small}
        onPress={() => console.log('Ghost')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
});
```

---

## Variants & Sizes

### `ButtonVariant`
- `ButtonVariant.Primary` (`'primary'`) — Background: `theme.primary`, Text: `theme.background`, Subtitle: `theme.background` (85% opacity).
- `ButtonVariant.Secondary` (`'secondary'`, default) — Background: `theme.surfaceSecondary`, Text: `theme.primary`, Subtitle: `theme.primary` (80% opacity).
- `ButtonVariant.Outline` (`'outline'`) — Background: `transparent`, Border: 2px `theme.primary`, Text: `theme.primary`, Subtitle: `theme.primary` (80% opacity).
- `ButtonVariant.Ghost` (`'ghost'`) — Background: `transparent`, Text: `theme.primary`, Subtitle: `theme.primary` (80% opacity).

### `ButtonSize`
| Size | `minHeight` | `borderRadius` | `paddingHorizontal` | `paddingVertical` | `fontSize` | Subtitle `fontSize` / `lineHeight` | Icon `size` |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ButtonSize.Small` (`'small'`) | 40 | 8 | 16 | 4 | 14 | 11 / 14 | 18 |
| `ButtonSize.Medium` (`'medium'`) | 52 | 12 | 20 | 6 | 16 | 12 / 16 | 22 |
| `ButtonSize.Large` (`'large'`, default) | 64 | 16 | 24 | 8 | 18 | 13 / 17 | 24 |

### `IconPosition`
- `IconPosition.Left` (`'left'`, default) — Places icon before label.
- `IconPosition.Right` (`'right'`) — Places icon after label.

---

## Props Reference

`ButtonProps` extends `Omit<TouchableOpacityProps, 'style'>`:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Text label for the button |
| `subtitle` | `string` | — | Secondary subtitle text displayed below the title |
| `children` | `React.ReactNode` | — | Custom content rendered when `title` is not provided |
| `variant` | `ButtonVariant` | `ButtonVariant.Secondary` | Visual button style variant |
| `size` | `ButtonSize` | `ButtonSize.Large` | Button dimension and typography preset |
| `icon` | `(props: IconProps) => React.ReactNode` | — | Render callback receiving `{ size, color }` |
| `iconPosition` | `IconPosition` | `IconPosition.Left` | Placement of the icon (`Left` or `Right`) |
| `disabled` | `boolean` | `false` | Disables interaction and reduces opacity to 0.5 |
| `onPress` | `() => void` | — | Press callback handler |
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

---

## License

MIT