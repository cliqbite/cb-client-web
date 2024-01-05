/* eslint-disable no-unused-vars */
type GenericObject = Record<string, any>

export function updateProperty<T extends GenericObject, K extends keyof T>(
  obj: T,
  property: K,
  value: T[K]
): T

export function updateProperty<T extends GenericObject>(
  obj: T,
  property: { [K in keyof T]?: T[K] }
): T

export function updateProperty<T extends GenericObject, K extends keyof T>(
  obj: T,
  property: K | { [K in keyof T]?: T[K] },
  value?: T[K]
): T {
  if (typeof property === 'string') {
    // Single key-value pair update
    return {
      ...obj,
      [property]: value
    }
  }
  if (typeof property === 'object') {
    // Object containing multiple key-value pairs update
    return {
      ...obj,
      ...property
    }
  }

  return obj
}
