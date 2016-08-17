const dog = () => {
  const sound = 'woof';
  return {
    talk: function() {
      console.log(sound);
    }
  }
}

let sniffles = dog();
sniffles.talk();
