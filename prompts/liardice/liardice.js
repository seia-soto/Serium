// NOTE: THIS FUNCTION WAS NOT INITIALIZED
let current_number

class Character_Data {
  constructor() {
    this.dice = []
    this.dice_number = 5
  }
}
const person = new Character_Data()
const bot = new Character_Data()

class Action {
  check(number_finding) {
    let number_found = 0
    for (let i = 0; i < person.dice_number; i++) {
      if (person.dice[i] === number_finding) number_found++
    }
    for (let i = 0; i < bot.dice_number; i++) {
      if (bot.dice[i] === number_finding) number_found++
    }
    return number_found
  }
  roll() {
    for (let i = 0; i < person.dice_number; i++) {
      bot.dice[i] = Math.floor(Math.random() * (6 - 1)) + 1
    }
    for (let i = 0; i < bot.dice_number; i++) {
      bot.dice[i] = Math.floor(Math.random() * (6 - 1)) + 1
    }
  }
  ran_decision(max) {
    return Math.floor(Math.random() * (max - 1)) + 1
  }
  true_false(dice, dice_num, decision, person_or_bot) {
    if (decision === 1) {
      if (dice_num === this.check(dice)) {
        if (person_or_bot === 0) {
          bot.dice[dice_number] = 0
          bot.dice_number--
        } else {
          person.dice[dice_number] = 0
          person.dice_number--
        }
      } else {
        if (person_or_bot === 0) {
          if (person_or_bot === 0) {
            bot.dice[dice_number] = 0
            bot.dice_number--
          } else {
            person.dice[dice_number] = 0
            person.dice_number--
          }
        }
      }
    } else {
      if (dice_num !== this.check(dice)) {
        if (person_or_bot === 0) {
          bot.dice[dice_number] = 0
          bot.dice_number--
        } else {
          person.dice[dice_number] = 0
          person.dice_number--
        }
      } else {
        if (person_or_bot === 0) {
          if (person_or_bot === 0) {
            person.dice[dice_number] = 0
            person.dice_number--
          } else {
            bot.dice[dice_number] = 0
            bot.dice_number--
          }
        }
      }
    }
  }
  pro_decision(dice, dice_num, bot_turn) {
    const what_should_do = this.ran_decision(3)
    if (what_should_do === 1 && bot_turn !== 1) {
      this.true_false(dice, dice_num, 1, 1)
    } else if (what_should_do === 2 && bot_turn !== 1) {
      this.true_false(dice, dice_num, 2, 1)
    } else {
      const judice_1 = this.ran_decision(2)
      if (dice_num === (bot.dice_number + player.dice_number)) {
        if (judice_1 === 1) {
          this.true_false(dice, dice_num, 1, 1)
        } else {
          this.true_false(dice, dice_num, 2, 1)
        }
      } else {
        if (judice_1 === 1) {
          const judice_2 = this.ran_decision(bot.dice_number)
          const judice_3 = this.ran_decision(3)
          if (judice_3 === 1) {
            this.pronounce(bot.dice[judice_2], dice_num + 1, ++define)
          } else if (judice_3 === 2) {
            this.pronounce(bot.dice[judice_2], dice_num + 2, ++define)
          } else {
            this.pronounce(bot.dice[judice_2], dice_num + 3, ++define)
          }
        } else {
          const judice_2 = this.ran_decision(6)
          const judice_3 = this.ran_decision(3)
          if (judice_3 === 1) {
            this.pronounce(bot.dice[judice_2], dice_num + 1, ++define)
          } else if (judice_3 === 2) {
            this.pronounce(bot.dice[judice_2], dice_num + 2, ++define)
          } else {
            this.pronounce(bot.dice[judice_2], dice_num + 3, ++define)
          }
        }
      }
    }
  }
  pronounce(dice, dice_num, define) {
    if (define % 2 === 0) {
      define++
      while (dice_num <= bot.dice_number + person.dice_number) {
        dice = N
        dice_num = N
      }
      this.pro_decision(dice, dice_num, 0)
    } else {
      define++
      this.pro_decision(dice, dice_num, 1)
      const command = N
      if (command === 1) {
        this.true_false(dice, dice_num, 1, 0)
      } else if (command = 2) {
        this.true_false(dice, dice_num, 2, 0)
      } else {
        this.pronounce(dice, dice_num, define)
      }
    }
  }
}

function play_liardice ()
{
    console.log ("라이어 다이스를 시작합니다.")
    {
        let who_turn = 0
        while (ai.dice_number !== 0 && player.dice_number !== 0)
        {
            roll () //주사위 굴리기
            if (who_turn % 2 === 0)
            {
                who_turn++ //턴 카운트
                console.log (who_turn + "번째 턴입니다.")
                Action.pronounce (dice, dice_num, 0) //플레이어 선언
            }
            else
            {
                who_turn++ //턴 카운트
                console.log (who_turn + "번째 턴입니다.")
                Action.pronounce (dice, dice_num, 1) //AI 선언
            }
        }
    }
}
