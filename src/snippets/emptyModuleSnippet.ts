
import { getModuleName } from '../utils';

const snippetTemplate = `
defmodule {moduleName} do
  @moduledoc false

  $0
end
`.replace(/^\s*/, '');

export function getEmptyModuleSnippet() {
  const moduleName = getModuleName();

  if (!moduleName) {
    return null;
  }

  return snippetTemplate.replace(/\{moduleName\}/, moduleName);
}