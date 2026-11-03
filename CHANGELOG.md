# Changelog

All notable changes to this project are documented here. This project follows [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-11-03

### Added
- Tailwind v3 palette (22 colors x 11 shades) as `bg*`, `text*`, `border*`, `tint*` utilities.
- Spacing, sizing, flexbox, typography, border, position, effects, transform and misc utilities.
- Border radius: named sizes, numeric scale (`rounded4`), per-edge, per-corner and RTL-aware start/end variants.
- `arb()` (alias `style`) helper for arbitrary values, with memoization.
- `cx()` helper for conditional styles, `colors` and `alpha()` helpers.
- Optional `brand` theme export.
- Full TypeScript key types (`TwKey`) for autocomplete.
