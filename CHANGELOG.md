# Changelog

All notable changes to this theme will be documented in this file.

## Unreleased

### Added

- Added dedicated `presentations` and `tools` page types.
- Added a standalone Giscus partial and centralized Giscus configuration.
- Added lowercase `zh-cn.yml` and `zh-tw.yml` language aliases.
- Added translation entries for `presentations` and `tools`.

### Changed

- Reworked page title generation so archive, tag, category, friends, about, presentations, and tools pages render consistent translated titles.
- Updated the share template to generate valid outbound share URLs.
- Fixed the About page example to use a relative `/friends/` link instead of a localhost URL.
- Expanded README and README-zh to document the current page model and configuration flow.

### Removed

- Removed built-in Valine, Waline, Gitalk, and Disqus support.
- Removed legacy comment-related assets, templates, and styles.

### Breaking Changes

- The `comments` configuration block has been removed. Use `giscus` instead.
- Projects relying on Valine, Waline, Gitalk, or Disqus must migrate before updating.
- `presentations` and `tools` should now use `type: "presentations"` and `type: "tools"` instead of reusing other page types.
