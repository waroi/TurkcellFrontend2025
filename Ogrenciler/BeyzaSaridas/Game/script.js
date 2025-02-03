function createGameState() {
  return {
    name: "SELOCAN",
    health: 100,
    hunger: 50,
    energy: 100,
    day: 1,
    inventory: {
      food: 2,
      water: 2,
      medicine: 1,
      weapon: false,
    },
  };
}
function showStatus(state) {
  console.log("\n========== DURUM RAPORU ==========");
  console.log(`Gün: ${state.day}`);
  console.log(`Sağlık: ${state.health}`);
  console.log(`Açlık: ${state.hunger}`);
  console.log(`Enerji: ${state.energy}`);
  console.log("\n---------- ENVANTER ----------");
  console.log(`Yiyecek: ${state.inventory.food} birim`);
  console.log(`Su: ${state.inventory.water} birim`);
  console.log(`İlaç: ${state.inventory.medicine} adet`);
  console.log(`Silah: ${state.inventory.weapon ? "Var" : "Yok"}`);
  console.log("================================\n");
}
function showDeathMessage(cause) {
  console.log("\n💀 === OYUN SONU === 💀");
  switch (cause) {
    case "health":
      console.log("Yaraların çok ağırdı ve daha fazla dayanamadın...");
      break;
    case "hunger":
      console.log("Açlığa yenik düştün ve güçsüzlükten öldün...");
      break;
    case "zombie":
      console.log("Zombi sürüsü tarafından parçalandın...");
      break;
    case "exhaustion":
      console.log("Aşırı yorgunluktan dolayı zombilerden kaçamadın...");
      break;
    case "victory":
      console.log("Tebrikler! 7 gün hayatta kalmayı başardın ve kurtarıldın!");
      break;
  }
  console.log(`Toplam hayatta kalınan gün: ${gameState.day}`);
  console.log("================================\n");
}

function visitMarket(state) {
  console.log("\n>>> MARKETE GİDİLİYOR...");
  let chance = Math.random();
  if (chance < 0.4) {
    console.log("Bir zombi grubuyla karşılaştın!");
    if (state.inventory.weapon) {
      console.log("Silahın sayesinde zombileri etkisiz hale getirdin!");
      state.energy -= 15;
    } else {
      console.log("Silahsız olduğun için kaçmak zorunda kaldın!");
      state.health -= 20;
      state.energy -= 30;
      if (state.health < 20 && Math.random() < 0.5) {
        showDeathMessage("zombie");
        return false;
      }
    }
  } else {
    console.log("Kullanılabilir malzemeler buldun!");
    state.inventory.food += 2;
    state.inventory.water += 2;
  }
  return endTurn(state);
}
function visitHouse(state) {
  console.log("\n>>> TERKEDİLMİŞ EVE GİRİLİYOR...");
  let chance = Math.random();
  if (chance < 0.4) {
    console.log("Evde gizlenmiş zombiler vardı!");
    state.health -= 65;
    state.energy -= 30;
    if (state.health < 20 && Math.random() < 0.5) {
      showDeathMessage("zombie");
      return false;
    }
  } else {
    console.log("Güvenli bir dinlenme alanı buldun.");
    state.energy += 15;
    if (chance > 0.7) {
      state.inventory.food += 1;
      state.inventory.medicine += 1;
      console.log("Ayrıca bazı malzemeler de buldun!");
    }
  }
  return endTurn(state);
}
function visitHospital(state) {
  console.log("\n>>> HASTANEYE GİRİLİYOR...");
  let chance = Math.random();
  if (chance < 0.5) {
    console.log("Hastanede zombileşmiş sağlık personeliyle karşılaştın!");
    if (state.inventory.weapon) {
      console.log("Silahınla kendini savundun!");
      state.energy -= 20;
    } else {
      console.log("Silahsız olmak çok tehlikeliydi!");
      state.health -= 35;
      state.energy -= 35;
      if (state.health < 20 && Math.random() < 0.5) {
        showDeathMessage("zombie");
        return false;
      }
    }
  } else {
    console.log("Tıbbi malzemeler buldun!");
    state.inventory.medicine += 1;
    if (chance > 0.6) {
      console.log("Ayrıca bir silah da buldun!");
      state.inventory.weapon = true;
    }
  }
  return endTurn(state);
}
function visitGasStation(state) {
  console.log("\n>>> BENZİN İSTASYONUNA GİDİLİYOR...");
  let chance = Math.random();
  if (chance < 0.3) {
    console.log("İstasyonda tehlikeli bir grup var!");
    state.health -= 45;
    state.energy -= 35;
    if (state.health < 20 && Math.random() < 0.5) {
      showDeathMessage("zombie");
      return false;
    }
  } else {
    console.log("Market kısmında malzemeler buldun!");
    state.inventory.food += 1;
    state.inventory.water += 2;
    if (chance > 0.7) {
      console.log("Arka odada kullanışlı şeyler vardı!");
      state.inventory.medicine += 1;
    }
  }
  return endTurn(state);
}
function visitPoliceStation(state) {
  console.log("\n>>> POLİS MERKEZİNE GİRİLİYOR...");
  let chance = Math.random();
  if (chance < 0.4) {
    console.log("Zombileşmiş polislerle karşılaştın!");
    if (state.inventory.weapon) {
      console.log("Silahınla kendini koruyabildin!");
      state.energy -= 30;
    } else {
      console.log("Silahsız olmak büyük dezavantaj!");
      state.health -= 35;
      state.energy -= 40;
      if (state.health < 20 && Math.random() < 0.5) {
        showDeathMessage("zombie");
        return false;
      }
    }
  } else {
    if (!state.inventory.weapon) {
      console.log("Silah deposunda kullanılabilir bir silah buldun!");
      state.inventory.weapon = true;
    }
    if (chance > 0.6) {
      console.log("İlk yardım çantası da buldun!");
      state.inventory.medicine += 1;
    }
  }
  return endTurn(state);
}
function endTurn(state) {
  state.hunger += 10;
  state.energy -= 10;
  if (state.hunger >= 80 && state.inventory.food > 0) {
    state.inventory.food--;
    state.hunger -= 20;
    console.log("🍗 Yemek yedin (-1 yiyecek)");
  }
  if (state.hunger >= 100) {
    state.health -= 20;
    console.log("⚠️ Açlıktan zarar görüyorsun!");
    if (state.health < 30 && Math.random() < 0.4) {
      showDeathMessage("hunger");
      return false;
    }
  }
  if (state.energy <= 0) {
    state.health -= 15;
    console.log("⚠️ Yorgunluktan zarar görüyorsun!");
    if (state.health < 25 && Math.random() < 0.5) {
      showDeathMessage("exhaustion");
      return false;
    }
  }
  if (state.health <= 50 && state.inventory.medicine > 0) {
    state.inventory.medicine--;
    state.health += 20;
    console.log("💊 İlaç kullandın (-1 ilaç)");
  }
  state.day++;
  showStatus(state);
  if (state.health <= 0) {
    showDeathMessage("health");
    return false;
  }
  if (state.day >= 7) {
    showDeathMessage("victory");
    return false;
  }
  return state;
}
function makeChoice(location) {
  switch (location) {
    case "market":
      gameState = visitMarket(gameState);
      break;
    case "terkedilmiş ev":
      gameState = visitHouse(gameState);
      break;
    case "hastane":
      gameState = visitHospital(gameState);
      break;
    case "benzin istasyonu":
      gameState = visitGasStation(gameState);
      break;
    case "polis merkezi":
      gameState = visitPoliceStation(gameState);
      break;
    default:
      console.log("Geçersiz lokasyon!");
  }
}

function startGame() {
  console.log("=== 🧟 ZOMBİ KIYAMETİ: HAYATTA KALMA OYUNU ===");
  console.log("Zombi salgınından sonra hayatta kalmaya çalışıyorsun...");
  console.log(
    "GİDİLEBİLECEK YERLER:'market','terkedilmiş ev','hastane','benzin istasyonu','polis merkezi'"
  );
  console.log(
    'Örnek kullanım şekli:➡️ gameState = makeChoice(gameState, "market");'
  );
  let initialState = createGameState();
  showStatus(initialState);
  return initialState;
}
let gameState = startGame();
