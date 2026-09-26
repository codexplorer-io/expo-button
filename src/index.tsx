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
    subtitle?: string;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: (props: IconProps) => React.ReactNode;
    iconPosition?: IconPosition;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    subtitleStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    subtitle,
    children,
    variant = ButtonVariant.Secondary,
    size = ButtonSize.Large,
    icon,
    iconPosition = IconPosition.Left,
    style,
    textStyle,
    subtitleStyle,
    disabled = false,
    onPress,
    activeOpacity = 0.7,
    ...restProps
}) => {
    const theme = useAppTheme();

    const getVariantStyle = (): { container: ViewStyle; text: TextStyle; subtitle: TextStyle } => {
        switch (variant) {
            case ButtonVariant.Primary:
                return {
                    container: {
                        backgroundColor: theme.primary,
                    },
                    text: {
                        color: theme.background,
                    },
                    subtitle: {
                        color: theme.background,
                        opacity: 0.85,
                    }
                };
            case ButtonVariant.Secondary:
                return {
                    container: {
                        backgroundColor: theme.surfaceSecondary,
                    },
                    text: {
                        color: theme.primary,
                    },
                    subtitle: {
                        color: theme.primary,
                        opacity: 0.8,
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
                    },
                    subtitle: {
                        color: theme.primary,
                        opacity: 0.8,
                    }
                };
            case ButtonVariant.Ghost:
                return {
                    container: {
                        backgroundColor: 'transparent',
                    },
                    text: {
                        color: theme.primary,
                    },
                    subtitle: {
                        color: theme.primary,
                        opacity: 0.8,
                    }
                };
            default:
                return {
                    container: {
                        backgroundColor: theme.surfaceSecondary,
                    },
                    text: {
                        color: theme.primary,
                    },
                    subtitle: {
                        color: theme.primary,
                        opacity: 0.8,
                    }
                };
        }
    };

    const getSizeStyle = (): { container: ViewStyle; text: TextStyle; subtitle: TextStyle } => {
        switch (size) {
            case ButtonSize.Small:
                return {
                    container: {
                        minHeight: 40,
                        borderRadius: 8,
                        paddingHorizontal: 16,
                        paddingVertical: 4,
                    },
                    text: {
                        fontSize: 14,
                    },
                    subtitle: {
                        fontSize: 11,
                        lineHeight: 14,
                    }
                };
            case ButtonSize.Medium:
                return {
                    container: {
                        minHeight: 52,
                        borderRadius: 12,
                        paddingHorizontal: 20,
                        paddingVertical: 6,
                    },
                    text: {
                        fontSize: 16,
                    },
                    subtitle: {
                        fontSize: 12,
                        lineHeight: 16,
                    }
                };
            case ButtonSize.Large:
            default:
                return {
                    container: {
                        minHeight: 64,
                        borderRadius: 16,
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                    },
                    text: {
                        fontSize: 18,
                    },
                    subtitle: {
                        fontSize: 13,
                        lineHeight: 17,
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
            <View style={[styles.innerRow]}>
                {hasLeftIcon && renderedIcon}
                {title ? (
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, sizeStyles.text, variantStyles.text, textStyle]}>
                            {title}
                        </Text>
                        {!!subtitle && (
                            <Text style={[styles.subtitle, sizeStyles.subtitle, variantStyles.subtitle, subtitleStyle]}>
                                {subtitle}
                            </Text>
                        )}
                    </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: 2,
    },
    disabled: {
        opacity: 0.5,
    },
});

export default Button;
