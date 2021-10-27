function Support({category}) {

  const supportSentences = [
    {
      sentence: 'You can be a good mom and a working mom. You are allowed to be both.',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    },
    {
      sentence: 'I think every working mom probably feels the same thing. You go through big chunks of time where you’re just thinking, This is impossible – oh, this is impossible. And then you just keep going and keep going, and you sort of do the impossible. – Tina Fey',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    },
    {
      sentence: 'Be the mom you want to be, not the mom others expect you to be.',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    },
    {
      sentence: 'You can spend all day with your kids, and still feel disconnected. Or spend you can spend just a few hours building incredible bonds and memories. It isn’t the amount of time that you spend with your kids that matters, it is the amount of quality time you spend with them.',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    },
    {
      sentence: 'This struggle is real. The juggle is real. That’s why everyone should hire working mothers. They are put in crazy situations all the time and are forced to problem-solve. They are some of my most resourceful employees. – Sara Blakely',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    },
    {
      sentence: 'Being a working mom does not make you a bad mom and being a mom doesn’t make you a bad employee.',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    },
    {
      sentence: 'Loving my job does not make me any less of a mom.',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    },
    {
      sentence: 'It does not matter if you are a working mom or stay at home mom, you breast feed your baby or bottle feed…someone will always be willing to criticize you for your parenting choices. What matters is you just do what is best for you and your family.',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    }, {
      sentence: 'I see you there mama, trying your best. I see you showing up each day, even though you feel exhausted. I see you making tough choices for your family even when you are not sure if you are right. I see you working tirelessly, even when it feels never ending. I see you doing an amazing job, even though your doubt yourself. I see you mama, and you are more than enough.',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    }, {
      sentence: '‘There’s something really empowering about going, ‘Hell, I can do this! I can do this all!’ That’s the wonderful thing about mothers, you can because you must, and you just do.’ – Kate Winslet',
      categories: ['unsuccessful', 'exhausted', 'notEnough', 'disconnected']
    }, {
      sentence: 'Some days you’ll be a rock star employee. Some days you’ll be a rock star mama. And some days you’ll be a rock star at both',
      categories: ['unsuccessful']
    },{
      sentence: 'Shout out to working moms. You’re doing your best. Even when you think you’re at your worst.',
      categories: ['unsuccessful','notEnough']
    },
  ]

  let filteredSupportSentences = supportSentences.filter(e => e.categories.includes(category));
  const randomNumber = Math.floor(Math.random() * filteredSupportSentences.length);

  const randomImage = 'img_' + Math.floor(Math.random() * 3) + '.png'
  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <img src={randomImage} className="mx-auto my-12 h-56" alt="Freepik "/>
        <p className="text-xl max-w-6xl px-6 py-4 bg-purple-800 text-white rounded-2xl text-left m-4">
          {supportSentences[randomNumber].sentence}
        </p>
      </div>
    </div>
  );
}

export default Support;