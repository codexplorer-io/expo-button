import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps
} from 'react-native';
import { useAppTheme } from '@codexporer.io/expo-app-theme';

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Outline = 'outline',
    Ghost = 'ghost',
}

export enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export enum IconPosition {
    Left = 'left',
    Right = 'right',
}

export interface IconProps {
    size: number;
    color: string;
}

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
    title?: string;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: (props: IconProps) => React.ReactNode;
    iconPosition?: IconPosition;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    children,
    variant = ButtonVariant.Secondary,
    size = ButtonSize.Large,
    icon,
    iconPosition = IconPosition.Left,
    style,
    textStyle,
    disabled = false,
    onPress,
    activeOpacity = 0.7,
    ...restProps
}) => {
    const theme = useAppTheme();

    const getVariantStyle = (): { container: ViewStyle; text: TextStyle } => {
        switch (variant) {
            case ButtonVariant.Primary:
                return {
                    container: {
                        backgroundColor: theme.primary,
                    },
                    text: {
                        color: theme.background,
                    }
                };
            case ButtonVariant.Secondary:
                return {
                    container: {
                        backgroundColor: theme.surfaceSecondary,
                    },
                    text: {
                        color: theme.primary,
                    }
                };
            case ButtonVariant.Outline:
                return {
                    container: {
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: theme.primary,
                    },
                    text: {
                        color: theme.primary,
                    }
                };
            case ButtonVariant.Ghost:
                return {
                    container: {
                        backgroundColor: 'transparent',
                    },
                    text: {
                        color: theme.primary,
                    }
                };
            default:
                return {
                    container: {
                        backgroundColor: theme.surfaceSecondary,
                    },
                    text: {
                        color: theme.primary,
                    }
                };
        }
    };

    const getSizeStyle = (): { container: ViewStyle; text: TextStyle } => {
        switch (size) {
            case ButtonSize.Small:
                return {
                    container: {
                        height: 40,
                        borderRadius: 8,
                        paddingHorizontal: 16,
                    },
                    text: {
                        fontSize: 14,
                    }
                };
            case ButtonSize.Medium:
                return {
                    container: {
                        height: 52,
                        borderRadius: 12,
                        paddingHorizontal: 20,
                    },
                    text: {
                        fontSize: 16,
                    }
                };
            case ButtonSize.Large:
            default:
                return {
                    container: {
                        height: 64,
                        borderRadius: 16,
                        paddingHorizontal: 24,
                    },
                    text: {
                        fontSize: 18,
                    }
                };
        }
    };

    const getIconSize = (btnSize: ButtonSize): number => {
        switch (btnSize) {
            case ButtonSize.Small:
                return 18;
            case ButtonSize.Medium:
                return 22;
            case ButtonSize.Large:
            default:
                return 24;
        }
    };

    const variantStyles = getVariantStyle();
    const sizeStyles = getSizeStyle();
    const iconSize = getIconSize(size);
    const iconColor = (variantStyles.text.color as string) || theme.primary;
    const renderedIcon = icon?.({ size: iconSize, color: iconColor }) ?? null;
    const hasLeftIcon = Boolean(renderedIcon && iconPosition === IconPosition.Left);
    const hasRightIcon = Boolean(renderedIcon && iconPosition === IconPosition.Right);

    return (
        <TouchableOpacity
            style={[
                styles.container,
                sizeStyles.container,
                variantStyles.container,
                disabled && styles.disabled,
                style
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
            {...restProps}
        >
            <View style={styles.innerRow}>
                {hasLeftIcon && renderedIcon}
                {title ? (
                    <Text style={[styles.text, sizeStyles.text, variantStyles.text, textStyle]}>
                        {title}
                    </Text>
                ) : (
                    children
                )}
                {hasRightIcon && renderedIcon}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 8,
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    disabled: {
        opacity: 0.5,
    },
});

export default Button;
