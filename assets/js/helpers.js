function generaNumeroRandomico(max, min=1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function percentage(num, per) {
  return (num/100)*per;
}