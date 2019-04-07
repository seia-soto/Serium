const fs = require('fs')
const path = require('path')

const PreferenceIndicator = require('./PreferenceIndicator')

const CheckPromptAvailable = (type, objective) => {
  switch (type) {
    case 'guild':
      let originallyGranted = PreferenceIndicator.Prompts

      if (PreferenceIndicator.Fine.id === objective.id) {
        PreferenceIndicator.Fine.limited.prompts.forEach(limitedPrompts => originallyGranted.push(limitedPrompts))
      }
      return originallyGranted
      break;
    case 'user':
      // NOTE: Check if user have sepecific role.
      break;
  }
}
