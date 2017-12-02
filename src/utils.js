const names = [
  "albattani",
  "allen",
  "almeida",
  "agnesi",
  "archimedes",
  "ardinghelli",
  "aryabhata",
  "austin",
  "babbage",
  "banach",
  "bardeen",
  "bartik",
  "bassi",
  "beaver",
  "bell",
  "benz",
  "bhabha",
  "bhaskara",
  "blackwell",
  "bohr",
  "booth",
  "borg",
  "bose",
  "boyd",
  "brahmagupta",
  "brattain",
  "brown",
  "carson",
  "chandrasekhar",
  "shannon",
  "clarke",
  "colden",
  "cori",
  "cray",
  "curran",
  "curie",
  "darwin",
  "davinci",
  "dijkstra",
  "dubinsky",
  "easley",
  "edison",
  "einstein",
  "elion",
  "engelbart",
  "euclid",
  "euler",
  "fermat",
  "fermi",
  "feynman",
  "franklin",
  "galileo",
  "gates",
  "goldberg",
  "goldstine",
  "goldwasser",
  "golick",
  "goodall",
  "haibt",
  "hamilton",
  "hawking",
  "heisenberg",
  "hermann",
  "heyrovsky",
  "hodgkin",
  "hoover",
  "hopper",
  "hugle",
  "hypatia",
  "jackson",
  "jang",
  "jennings",
  "jepsen",
  "johnson",
  "joliot",
  "jones",
  "kalam",
  "kare",
  "keller",
  "kepler",
  "khorana",
  "kilby",
  "kirch",
  "knuth",
  "kowalevski",
  "lalande",
  "lamarr",
  "lamport",
  "leakey",
  "leavitt",
  "lewin",
  "lichterman",
  "liskov",
  "lovelace",
  "lumiere",
  "mahavira",
  "mayer",
  "mccarthy",
  "mcclintock",
  "mclean",
  "mcnulty",
  "meitner",
  "meninsky",
  "mestorf",
  "minsky",
  "mirzakhani",
  "morse",
  "murdock",
  "neumann",
  "newton",
  "nightingale",
  "nobel",
  "noether",
  "northcutt",
  "noyce",
  "panini",
  "pare",
  "pasteur",
  "payne",
  "perlman",
  "pike",
  "poincare",
  "poitras",
  "ptolemy",
  "raman",
  "ramanujan",
  "ride",
  "montalcini",
  "ritchie",
  "roentgen",
  "rosalind",
  "saha",
  "sammet",
  "shaw",
  "shirley",
  "shockley",
  "sinoussi",
  "snyder",
  "spence",
  "stallman",
  "stonebraker",
  "swanson",
  "swartz",
  "swirles",
  "tesla",
  "thompson",
  "torvalds",
  "turing",
  "varahamihira",
  "visvesvaraya",
  "volhard",
  "wescoff",
  "wiles",
  "williams",
  "wilson",
  "wing",
  "wozniak",
  "wright",
  "yalow",
  "yonath"
];

export function generateName() {
  const name = names[Math.floor(Math.random() * names.length)];
  return name.replace(/^./, name[0].toUpperCase());
}

export function promptForName(username) {
  if (!username) username = generateName();

  do {
    username = prompt("Choose a username", username);
  } while (!(username && username.length));
  return username;
}

export function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2)
    return parts
      .pop()
      .split(";")
      .shift();
}

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}

export function angleToDirection(angle) {
  angle = (angle * THREE.Math.RAD2DEG + 180 + 45) % 360;
  if (angle > 0 && angle < 90) {
    return "down";
  } else if (angle >= 90 && angle < 180) {
    return "left";
  } else if (angle >= 180 && angle < 270) {
    return "up";
  } else {
    return "right";
  }
}

export function angleTo4Direction(angle) {
  angle = (angle * THREE.Math.RAD2DEG + 180 + 45) % 360;
  if (angle > 0 && angle < 90) {
    return "north";
  } else if (angle >= 90 && angle < 180) {
    return "west";
  } else if (angle >= 180 && angle < 270) {
    return "south";
  } else {
    return "east";
  }
}

export function angleTo8Direction(angle) {
  angle = (angle * THREE.Math.RAD2DEG + 180 + 45) % 360;
  var direction = "";
  if ((angle >= 0 && angle < 120) || angle >= 330) {
    direction += "north";
  }
  if (angle >= 150 && angle < 300) {
    direction += "south";
  }
  if (angle >= 60 && angle < 210) {
    direction += "west";
  }
  if ((angle >= 240 && angle < 360) || angle < 30) {
    direction += "east";
  }
  return direction;
}
