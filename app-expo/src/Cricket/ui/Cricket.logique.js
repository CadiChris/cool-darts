export const aplatis = (touches) =>
  touches.reduce(
    (acc, { chiffre, fois }) => [
      ...acc,
      ...Array.from({ length: fois }, () => chiffre),
    ],
    []
  );

export const integreTouche = (chiffre, touches) => {
  const chiffreExistant = touches.find((t) => t.chiffre === chiffre);

  if (!chiffreExistant) return [...touches, { chiffre, fois: 1 }];

  return touches.map((t) =>
    t.chiffre !== chiffre ? t : { chiffre: t.chiffre, fois: t.fois + 1 }
  );
};
