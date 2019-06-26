/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const preferences = require('../preferences')

const levels = {
  everyone: 0x00,
  staff: 0x01,
  admin: 0x11
}

const getPermissions = scope => {
  let permissions = levels.everyone

  if (scope.user.hasPermission('ADMINISTRATOR')) {
    permissions = permissions | levels.staff
  }
  if (preferences.client.admin.includes(scope.user.id)) {
    permissions = permissions | levels.admin
  }

  return permissions
}

module.exports = getPermissions
