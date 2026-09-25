# `@codexporer.io/expo-button`

A customizable, theme-aware button component for React Native and Expo applications with multiple design variants, sizing options, icon placements, and dynamic color integration.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/expo-button
```

Peer dependencies:
- `react` (`*`)
- `react-native` (`*`)
- `@codexporer.io/expo-app-theme` (`*`)

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

## Variants & Sizes

### `ButtonVariant`
- `ButtonVariant.Primary` — Solid primary branding background (`theme.primary`) with contrasting text.
- `ButtonVariant.Secondary` — Subtle secondary background (`theme.surfaceSecondary`) with primary colored text.
- `ButtonVariant.Outline` — Transparent background with 2px primary border.
- `ButtonVariant.Ghost` — Transparent background with primary text (borderless).

### `ButtonSize`
- `ButtonSize.Small` — Height 40px, font size 14px, icon size 18px.
- `ButtonSize.Medium` — Height 52px, font size 16px, icon size 22px.
- `ButtonSize.Large` — Height 64px, font size 18px, icon size 24px (default).

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Text label for the button |
| `children` | `ReactNode` | — | Custom content if `title` is not provided |
| `variant` | `ButtonVariant` | `ButtonVariant.Secondary` | Visual button style variant |
| `size` | `ButtonSize` | `ButtonSize.Large` | Button dimension and typography preset |
| `icon` | `(props: IconProps) => ReactNode` | — | Render callback providing calculated `size` and `color` |
| `iconPosition` | `IconPosition` | `IconPosition.Left` | `'left'` or `'right'` |
| `disabled` | `boolean` | `false` | Disables touch interaction and reduces opacity to 0.5 |
| `onPress` | `() => void` | — | Click / tap handler |
| `style` | `StyleProp<ViewStyle>` | — | Outer container style override |
| `textStyle` | `StyleProp<TextStyle>` | — | Text style override |
| `activeOpacity` | `number` | `0.7` | Opacity on press |

## License

MIT