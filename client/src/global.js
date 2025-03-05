import React, { use, useEffect, useState } from 'react'
export let globalState = { username: "", isLoggedIn: false, increment: 0 };

export function updateGlobalState(name, status) {
  globalState.increment += 1;
  globalState.username = name;
  globalState.isLoggedIn = status;
  console.log("logged in: " + globalState.isLoggedIn);
}