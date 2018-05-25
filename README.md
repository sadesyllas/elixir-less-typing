# elixir-less-typing

Automatically insert boilerplate Elixir code.

## Features

#### - `Insert Elixir module name here`
> This command inserts the module's name, based on the path to the currently
> edited file, where the cursor currently is.

#### - `Insert empty Elixir module snippet here`
> This command inserts a snippet with an empty elixir module.
> The name of the module is set as if `Insert Elixir module name here` had
> been called.

## Requirements

None

## Extension Settings

#### - `elixirLessTyping.nameMappings`
> Set any names that should be _fixed_ in this map.
> E.g., if all versions of API (i.e., _api_, _Api_, _aPi_, e.t.c.) need
> to be set as _API_ when producing a module's name, then the entry in the
> `elixirLessTyping.nameMappings` map needs to be `{"api": "API"}`.
> The matching with the map's keys is done in a case-insensitive way.

## Known Issues

None

## Release Notes

### 0.0.1

init(app)
