# Gnobesy Changelog

All notable changes to this project will be documented in this file.

## [0.4.3](https://github.com/fvoges/Gnobesy/compare/0.4.2...0.4.3) (2026-04-12)

### Bug Fixes

* **compat:** update guild bank UI for WoW 12.0.1 ([c346bc5](https://github.com/fvoges/Gnobesy/commit/c346bc56ae4e650dd9061890c9100d5d8048d3a8))

# [0.4.2] (2025-01-03)

## Interface Update for WoW 11.2.5

### Maintenance

* **release:** add release automation and update for WoW 11.2.5 ([0350330](https://github.com/fvoges/Gnobesy/commit/0350330))
  - Update Interface version 110200 -> 110205 (WoW 11.2.5)
  - Add Taskfile.yml for automated releases with conventional-changelog
  - Add .clrc for changelog configuration
  - Add .pkgmeta to exclude dev files from packaged releases
  - Remove deprecated generate_changelog.sh script

# [0.4.1] (2024-12-27)

## Interface Update for WoW 11.0.2+

### Fixed
- Updated Interface version from 110005 to 110200 for WoW 11.0.2+ compatibility
- Fixed deprecated container API calls - migrated to C_Container namespace
  - GetContainerItemInfo now uses modern API with backward compatibility
  - PickupContainerItem now uses C_Container.PickupContainerItem
- Fixed deprecated InterfaceOptionsFrame_OpenToCategory - migrated to Settings.OpenToCategory
- Implemented dynamic version detection to prevent version drift between TOC and code

### Technical Changes
- Added backward compatibility wrappers for older WoW versions
- All API calls now support both modern and legacy WoW clients
- Version management now dynamically reads from TOC metadata

### Documentation
- Complete README.md rewrite with comprehensive feature documentation
- Added friendly, welcoming maintenance approach
- Added detailed installation instructions and usage guide
- Added feature explanations for guild bank sorting and controls
- Updated download links to current sources (Wago, GitHub)
- Added historical links to original unmaintained versions

### Previous Releases

# [0.3.5-3-g2584a4d](https://github.com/fvoges/Gnobesy/tree/2584a4d210dc6948ed3e32faba6ddb8cac8e68c3) (2024-11-12)

[Full Changelog](https://github.com/fvoges/Gnobesy/compare/0.3.5...2584a4d210dc6948ed3e32faba6ddb8cac8e68c3)

Federico Voges (3):

- fix InterfaceOptions_AddCategory error
- bump addon and api versions
- add README
