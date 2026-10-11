---
name: expo-button
description: Instructions and guidelines for using @codexporer.io/expo-button (Expo Button) in React Native and Expo applications.
---

# `@codexporer.io/expo-button` Skill

## Overview
`@codexporer.io/expo-button` provides a themed, accessible button component supporting primary, secondary, outline, and ghost variants with integrated loading states, leading/trailing icons, and size presets.

---

## When to Use
- All interactive button elements throughout the application.
- Form submit actions, dialog dismissals, and call-to-action triggers.

---

## Usage Example

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  ButtonVariant,
  ButtonSize,
  IconPosition
} from '@codexporer.io/expo-button';
import { MaterialIcons } from '@expo/vector-icons';

export function ButtonShowcase() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ gap: 12, padding: 16 }}>
      <Button
        title="Save Changes"
        variant={ButtonVariant.Primary}
        size={ButtonSize.Large}
        loading={loading}
        onPress={() => setLoading(true)}
      />

      <Button
        title="Upload Image"
        variant={ButtonVariant.Outline}
        size={ButtonSize.Medium}
        icon={<MaterialIcons name="cloud-upload" size={18} />}
        iconPosition={IconPosition.Left}
      />

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

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Button text label |
| `onPress` | `() => void` | — | Press callback |
| `variant` | `ButtonVariant` | `ButtonVariant.Primary` | Visual styling variant (`Primary`, `Secondary`, `Outline`, `Ghost`) |
| `size` | `ButtonSize` | `ButtonSize.Medium` | Height and padding preset (`Small`, `Medium`, `Large`) |
| `disabled` | `boolean` | `false` | Disables touch events and lowers opacity |
| `loading` | `boolean` | `false` | Shows activity indicator in place of title |
| `icon` | `ReactNode` | — | Leading or trailing icon element |
| `iconPosition` | `IconPosition` | `IconPosition.Left` | Icon placement (`Left` or `Right`) |
| `fullWidth` | `boolean` | `false` | Expands button width to 100% of container |
| `style` | `StyleProp<ViewStyle>` | — | Container style override |
| `textStyle` | `StyleProp<TextStyle>` | — | Label typography override |

### Enums

- **`ButtonVariant`**:
  - `Primary = 'primary'`
  - `Secondary = 'secondary'`
  - `Outline = 'outline'`
  - `Ghost = 'ghost'`
- **`ButtonSize`**:
  - `Small = 'small'`
  - `Medium = 'medium'`
  - `Large = 'large'`
- **`IconPosition`**:
  - `Left = 'left'`
  - `Right = 'right'`

---

## Critical Rules & Guidelines
1. **Use Variants Semantically**: Reserve `Primary` for the main action per screen/dialog; use `Secondary` or `Ghost` for secondary options.
2. **Accessible Sizing**: Prefer `Medium` or `Large` buttons for primary mobile touch targets (meeting 44pt minimum height standards).
