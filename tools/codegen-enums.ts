export const enums: Record<string, Record<string, string>> = {
  SDL_ArrayOrder: {
    SDL_ARRAYORDER_NONE: "0",
    SDL_ARRAYORDER_RGB: "1",
    SDL_ARRAYORDER_RGBA: "2",
    SDL_ARRAYORDER_ARGB: "3",
    SDL_ARRAYORDER_BGR: "4",
    SDL_ARRAYORDER_BGRA: "5",
    SDL_ARRAYORDER_ABGR: "6",
  },

  SDL_BitmapOrder: {
    SDL_BITMAPORDER_NONE: "0",
    SDL_BITMAPORDER_4321: "1",
    SDL_BITMAPORDER_1234: "2",
  },

  SDL_EventType: {
    SDL_FIRSTEVENT: "0",
    SDL_QUIT: "0x100",
    SDL_APP_TERMINATING: "257",
    SDL_APP_LOWMEMORY: "258",
    SDL_APP_WILLENTERBACKGROUND: "259",
    SDL_APP_DIDENTERBACKGROUND: "260",
    SDL_APP_WILLENTERFOREGROUND: "261",
    SDL_APP_DIDENTERFOREGROUND: "262",
    SDL_LOCALECHANGED: "263",
    SDL_DISPLAYEVENT: "0x150",
    SDL_WINDOWEVENT: "0x200",
    SDL_SYSWMEVENT: "513",
    SDL_KEYDOWN: "0x300",
    SDL_KEYUP: "769",
    SDL_TEXTEDITING: "770",
    SDL_TEXTINPUT: "771",
    SDL_KEYMAPCHANGED: "772",
    SDL_MOUSEMOTION: "0x400",
    SDL_MOUSEBUTTONDOWN: "1025",
    SDL_MOUSEBUTTONUP: "1026",
    SDL_MOUSEWHEEL: "1027",
    SDL_JOYAXISMOTION: "0x600",
    SDL_JOYBALLMOTION: "1537",
    SDL_JOYHATMOTION: "1538",
    SDL_JOYBUTTONDOWN: "1539",
    SDL_JOYBUTTONUP: "1540",
    SDL_JOYDEVICEADDED: "1541",
    SDL_JOYDEVICEREMOVED: "1542",
    SDL_CONTROLLERAXISMOTION: "0x650",
    SDL_CONTROLLERBUTTONDOWN: "1617",
    SDL_CONTROLLERBUTTONUP: "1618",
    SDL_CONTROLLERDEVICEADDED: "1619",
    SDL_CONTROLLERDEVICEREMOVED: "1620",
    SDL_CONTROLLERDEVICEREMAPPED: "1621",
    SDL_CONTROLLERTOUCHPADDOWN: "1622",
    SDL_CONTROLLERTOUCHPADMOTION: "1623",
    SDL_CONTROLLERTOUCHPADUP: "1624",
    SDL_CONTROLLERSENSORUPDATE: "1625",
    SDL_FINGERDOWN: "0x700",
    SDL_FINGERUP: "1793",
    SDL_FINGERMOTION: "1794",
    SDL_DOLLARGESTURE: "0x800",
    SDL_DOLLARRECORD: "2049",
    SDL_MULTIGESTURE: "2050",
    SDL_CLIPBOARDUPDATE: "0x900",
    SDL_DROPFILE: "0x1000",
    SDL_DROPTEXT: "4097",
    SDL_DROPBEGIN: "4098",
    SDL_DROPCOMPLETE: "4099",
    SDL_AUDIODEVICEADDED: "0x1100",
    SDL_AUDIODEVICEREMOVED: "4353",
    SDL_SENSORUPDATE: "0x1200",
    SDL_RENDER_TARGETS_RESET: "0x2000",
    SDL_RENDER_DEVICE_RESET: "8193",
    SDL_POLLSENTINEL: "0x7F00",
    SDL_USEREVENT: "0x8000",
    SDL_LASTEVENT: "0xFFFF",
  },

  SDL_Init: {
    SDL_INIT_TIMER: "0x00000001",
    SDL_INIT_AUDIO: "0x00000010",
    SDL_INIT_VIDEO: "0x00000020",
    SDL_INIT_JOYSTICK: "0x00000200",
    SDL_INIT_HAPTIC: "0x00001000",
    SDL_INIT_GAMECONTROLLER: "0x00002000",
    SDL_INIT_EVENTS: "0x00004000",
    SDL_INIT_SENSOR: "0x00008000",
    SDL_INIT_NOPARACHUTE: "0x00100000",
    SDL_INIT_EVERYTHING:
      "( SDL_INIT_TIMER | SDL_INIT_AUDIO | SDL_INIT_VIDEO | SDL_INIT_EVENTS | SDL_INIT_JOYSTICK | SDL_INIT_HAPTIC | SDL_INIT_GAMECONTROLLER | SDL_INIT_SENSOR )",
  },

  SDL_PackedLayout: {
    SDL_PACKEDLAYOUT_NONE: "0",
    SDL_PACKEDLAYOUT_332: "1",
    SDL_PACKEDLAYOUT_4444: "2",
    SDL_PACKEDLAYOUT_1555: "3",
    SDL_PACKEDLAYOUT_5551: "4",
    SDL_PACKEDLAYOUT_565: "5",
    SDL_PACKEDLAYOUT_8888: "6",
    SDL_PACKEDLAYOUT_2101010: "7",
    SDL_PACKEDLAYOUT_1010102: "8",
  },

  SDL_PackedOrder: {
    SDL_PACKEDORDER_NONE: "0",
    SDL_PACKEDORDER_XRGB: "1",
    SDL_PACKEDORDER_RGBX: "2",
    SDL_PACKEDORDER_ARGB: "3",
    SDL_PACKEDORDER_RGBA: "4",
    SDL_PACKEDORDER_XBGR: "5",
    SDL_PACKEDORDER_BGRX: "6",
    SDL_PACKEDORDER_ABGR: "7",
    SDL_PACKEDORDER_BGRA: "8",
  },

  SDL_PixelType: {
    SDL_PIXELTYPE_UNKNOWN: "0",
    SDL_PIXELTYPE_INDEX1: "1",
    SDL_PIXELTYPE_INDEX4: "2",
    SDL_PIXELTYPE_INDEX8: "3",
    SDL_PIXELTYPE_PACKED8: "4",
    SDL_PIXELTYPE_PACKED16: "5",
    SDL_PIXELTYPE_PACKED32: "6",
    SDL_PIXELTYPE_ARRAYU8: "7",
    SDL_PIXELTYPE_ARRAYU16: "8",
    SDL_PIXELTYPE_ARRAYU32: "9",
    SDL_PIXELTYPE_ARRAYF16: "10",
    SDL_PIXELTYPE_ARRAYF32: "11",
  },

  SDL_RendererFlags: {
    SDL_RENDERER_SOFTWARE: "0x00000001",
    SDL_RENDERER_ACCELERATED: "0x00000002",
    SDL_RENDERER_PRESENTVSYNC: "0x00000004",
    SDL_RENDERER_TARGETTEXTURE: "0x00000008",
  },

  SDL_RendererFlip: {
    SDL_FLIP_NONE: "0x00000000",
    SDL_FLIP_HORIZONTAL: "0x00000001",
    SDL_FLIP_VERTICAL: "0x00000002",
  },

  SDL_ScaleMode: {
    SDL_ScaleModeNearest: "0",
    SDL_ScaleModeLinear: "1",
    SDL_ScaleModeBest: "2",
  },

  SDL_TextureAccess: {
    SDL_TEXTUREACCESS_STATIC: "0",
    SDL_TEXTUREACCESS_STREAMING: "1",
    SDL_TEXTUREACCESS_TARGET: "2",
  },

  SDL_TextureModulate: {
    SDL_TEXTUREMODULATE_NONE: "0x00000000",
    SDL_TEXTUREMODULATE_COLOR: "0x00000001",
    SDL_TEXTUREMODULATE_ALPHA: "0x00000002",
  },

  SDL_WindowEventID: {
    SDL_WINDOWEVENT_NONE: "0",
    SDL_WINDOWEVENT_SHOWN: "1",
    SDL_WINDOWEVENT_HIDDEN: "2",
    SDL_WINDOWEVENT_EXPOSED: "3",
    SDL_WINDOWEVENT_MOVED: "4",
    SDL_WINDOWEVENT_RESIZED: "5",
    SDL_WINDOWEVENT_SIZE_CHANGED: "6",
    SDL_WINDOWEVENT_MINIMIZED: "7",
    SDL_WINDOWEVENT_MAXIMIZED: "8",
    SDL_WINDOWEVENT_RESTORED: "9",
    SDL_WINDOWEVENT_ENTER: "10",
    SDL_WINDOWEVENT_LEAVE: "11",
    SDL_WINDOWEVENT_FOCUS_GAINED: "12",
    SDL_WINDOWEVENT_FOCUS_LOST: "13",
    SDL_WINDOWEVENT_CLOSE: "14",
    SDL_WINDOWEVENT_TAKE_FOCUS: "15",
    SDL_WINDOWEVENT_HIT_TEST: "16",
    SDL_WINDOWEVENT_ICCPROF_CHANGED: "17",
    SDL_WINDOWEVENT_DISPLAY_CHANGED: "18",
  },

  SDL_WindowFlags: {
    SDL_WINDOW_FULLSCREEN: "0x00000001",
    SDL_WINDOW_OPENGL: "0x00000002",
    SDL_WINDOW_SHOWN: "0x00000004",
    SDL_WINDOW_HIDDEN: "0x00000008",
    SDL_WINDOW_BORDERLESS: "0x00000010",
    SDL_WINDOW_RESIZABLE: "0x00000020",
    SDL_WINDOW_MINIMIZED: "0x00000040",
    SDL_WINDOW_MAXIMIZED: "0x00000080",
    SDL_WINDOW_MOUSE_GRABBED: "0x00000100",
    SDL_WINDOW_INPUT_FOCUS: "0x00000200",
    SDL_WINDOW_MOUSE_FOCUS: "0x00000400",
    SDL_WINDOW_FULLSCREEN_DESKTOP: "( SDL_WINDOW_FULLSCREEN | 0x00001000 )",
    SDL_WINDOW_FOREIGN: "0x00000800",
    SDL_WINDOW_ALLOW_HIGHDPI: "0x00002000",
    SDL_WINDOW_MOUSE_CAPTURE: "0x00004000",
    SDL_WINDOW_ALWAYS_ON_TOP: "0x00008000",
    SDL_WINDOW_SKIP_TASKBAR: "0x00010000",
    SDL_WINDOW_UTILITY: "0x00020000",
    SDL_WINDOW_TOOLTIP: "0x00040000",
    SDL_WINDOW_POPUP_MENU: "0x00080000",
    SDL_WINDOW_KEYBOARD_GRABBED: "0x00100000",
    SDL_WINDOW_VULKAN: "0x10000000",
    SDL_WINDOW_METAL: "0x20000000",
    SDL_WINDOW_INPUT_GRABBED: "SDL_WINDOW_MOUSE_GRABBED",
  },

  SDL_WindowPos: {
    SDL_WINDOWPOS_UNDEFINED: "0x1fff0000",
    SDL_WINDOWPOS_CENTERED: "0x2FFF0000",
  },
};
