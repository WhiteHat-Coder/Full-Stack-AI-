# Design system

## Direction

A calm technical study desk: warm paper background, ink-like navy structure, teal learning signals, and coral emphasis. The interface should feel like documentation with the focus and pacing of a course platform.

## Typography

- Editorial headings use Georgia for a distinct, readable study character.
- Controls and metadata use a system sans stack for compact UI legibility.
- Code uses a monospace stack.

## Components

- **Header:** brand, search, and theme control.
- **Sidebar:** course map and progress summary.
- **Lesson surface:** bounded reading area with a clear content hierarchy.
- **Callout:** reserved for source labels, key ideas, warnings, or deeper explanations.
- **Code block:** must expose language and provide a copy action when code is added.
- **Progress:** a simple horizontal track plus text percentage; never color alone.

## Responsive behavior

Desktop uses a two-column reading layout. At narrow widths the course map becomes a horizontal scroller, content padding reduces, and lesson cards stack. Controls remain keyboard reachable and text must not overflow its container.

## Accessibility

Use semantic landmarks, one clear page heading per view, visible focus styles, descriptive labels, sufficient contrast, and reduced-motion handling for any future animation.
