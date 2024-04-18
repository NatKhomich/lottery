import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type Props<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?: 'subtitle1' | 'subtitle2' | 'title'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: Props<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  const classNames = clsx(s[variant], className)

  return <Component className={classNames} {...rest} />
}
