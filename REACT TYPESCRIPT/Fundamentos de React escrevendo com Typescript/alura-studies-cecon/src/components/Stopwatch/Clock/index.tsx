import style from "./Clock.module.scss";

interface Props {
  tempo?: number;
}

const Clock = ({ tempo = 0 }: Props) => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
  const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundosDezena}</span>
      <span className={style.relogioNumero}>{segundosUnidade}</span>
    </>
  );
};

export default Clock;
