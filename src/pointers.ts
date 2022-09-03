import { NULL_POINTER, PlatformPointer } from "platform";
import { BoxedArray, BoxedValue, isBoxedArray, isBoxedValue } from "./boxes.ts";
import { PointerValue, Struct, TypedArray } from "./types.ts";
import { isStruct } from "./_structs.ts";
import { isTypedArray } from "./_utils.ts";

export type PointerLike<T> = BoxedArray<T> | BoxedValue<T> | Struct;

export type PointerTo<T> = PointerValue<T> | PointerLike<T>;

export class Pointer {
  public static readonly SIZE_IN_BYTES = PlatformPointer.SIZE_IN_BYTES;

  private constructor() {
  }

  public static isPointer(value: unknown): value is PointerValue<unknown> {
    return typeof value === "bigint" || typeof value === "number";
  }

  public static of<T>(
    value: TypedArray | PointerValue<T> | PointerLike<T> | null | undefined,
    offset = 0,
  ): PointerValue<T> {
    if (value === null || value === undefined) {
      return NULL_POINTER;
    }

    if (Pointer.isPointer(value)) {
      return value;
    }

    if (isTypedArray(value)) {
      return PlatformPointer.of(value, offset);
    } else if (isBoxedArray(value)) {
      return PlatformPointer.of(value._data, offset * value.sizeOfElementInBytes);
    } else if (isBoxedValue(value)) {
      return PlatformPointer.of(value._data);
    } else if (isStruct(value)) {
      if (Pointer.isPointer(value._data)) {
        return value._data;
      } else {
        return PlatformPointer.of(value._data);
      }
    }

    throw new Error(`Unable to get pointer of ${value}.`);
  }
}
