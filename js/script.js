/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'교실1': '교실1.jpg',
	'교실': '교실2.jpg',
	'교실2': '교실3.jpg',
	'복도1': '복도2.jpg',
	'복도': '복도1.jpg',
	'복도2': '복도1.jpg',
	'ㅍㅈ': 'ㅍㅈ.jpg',
	'ㅊ': 'ㅊ.jpg',
	'서서관': '도서관11.jpg',
	'서서관1': '도서관13.jpg',
	'서서관2': '도서관12.jpg',
	'서서관3': '도서관14.jpg',
	'동서관': '도서관21.jpg',
	'동서관2': '도서관22.jpg',
	'동서관1': '도서관23.jpg',
	'도서관': '도서관0.jpg',
	'도서관앞': '도서관앞.jpg'
});


// Define the Characters
monogatari.characters({
	'맵': {  // 조사맵을 띄울 때 표시하는 가상의 캐릭터
		name: ''
	},
	'책': {
		name: '',
		type_animation: false
	},
	'ㄱ': {
		name: '김고양',
		color: '#bb88ff',
		sprites: {
			ㅇ: 'ㄱ ㅇ.png',
			ㅎ: 'ㄱ ㅎ.png',
			ㅋ: 'ㄱ ㅋ.png',
			ㅠ: 'ㄱ ㅠ.png',
			ㅡ: 'ㄱ ㅡ.png',
		},
	},
	'ㅡ': {
		name: '이호랑',
		color: '#',
	},
	'ㅂ': {
		name: '박토끼',
		color: '#ff99cc',
		sprites: {
			ㅇ: 'ㅂ ㅇ.png',
			ㅋ: 'ㅂ ㅋ.png',
			ㅎ: 'ㅂ ㅎ.png',
			ㅠ: 'ㅂ ㅠ.png',
			ㅡ: 'ㅂ ㅡ.png',
			ㅂ: 'ㅂ ㅂ.png',
		},
	},
	'ㅊ': {
		name: '최 양',
		color: '#ddaa44',
		sprites: {
			ㅇ: 'ㅊ ㅇ.png',
			ㅋ: 'ㅊ ㅋ.png',
			ㅎ: 'ㅊ ㅎ.png',
			ㅠ: 'ㅊ ㅠ.png',
			ㅡ: 'ㅊ ㅡ.png',
		},
	},
	'ㅈ': {
		name: '정원숭',
		color: '#dd6666',
		sprites: {
			ㅇ: 'ㅈ ㅇ.png',
			ㅋ: 'ㅈ ㅋ.png',
			ㅎ: 'ㅈ ㅎ.png',
			ㅠ: 'ㅈ ㅠ.png',
			ㅡ: 'ㅈ ㅡ.png',
			ㅂ: 'ㅈ ㅂ.png',
			ㄴ: 'ㅈ ㄴ.png',
		},
	},
	'ㅁ': {
		name: '한거북',
		color: '#',
	},
	'ㄴ': {
		name: '남 곰',
		color: '#e97451',
	},
	'ㄹ': {
		name: '류펭귄',
		color: '#44bbdd',
		sprites: {
		},
	},
});



monogatari.script({

	/* ================================
	1일차 교실
	================================ */

	'Start': [
		'show background #ffffff with fadeIn',
		'centered 본 게임은 가로로 긴 화면에 최적화되어 있습니다.',
		'wait 1000',
		'show scene 교실1 with fadeIn',
		'wait 1000',
		'<span style="color:lightblue;"> 화면 속 친구들을 클릭해 말을 걸어보세요. </span>',
		'show scene 교실1',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump 1-1',
					'Class': 't11',
				},
			}
		}
	],

	'1-1': [
		'show scene 교실 with fadeIn',
		'show character ㅈ ㅇ at left',
		'ㅈ …그러니까, 나는 지금이 한창 자랄 때라는 뜻이지.',
		'ㅈ 우리 형이 그러는데, 중학생 때 남자는 노력하면 일 년에 10cm는 클 수 있대.',
		'show character ㄱ ㅎ at right',
		'show character ㅈ ㄴ at left',
		'ㄱ 웃기시네. 너 작년에도 그 소리 했거든?            그런데 지금 봐, 아직도 나랑 비슷하잖아.',
		'show character ㅈ ㅠ at left',
		'ㅈ 윽, 그건 내가 작년에는 우유를 제대로 안 마셔서 그래. 올해는 매일매일 한 컵씩 마시고 있거든.',
		'show scene #ffffff with fadeIn',
		'wait 10',
		'show scene 교실 with fadeIn',
		'show character ㄱ ㅎ at right',
		'show character ㅈ ㅇ at left',
		'ㄱ ……오,            왔어? 일찍 등교했네?',
		'show character ㅈ ㅇ at left',
		'ㅈ 안녕! 저기,            그러니까….',
		'show character ㅈ ㅠ at left',
		'ㅈ ……            너 이름이 뭐였더라…?',
		{
			'Input': {
				'Text': '(성을 제외한) 이름을 입력해주세요.',
				'Validation': function(input) {
					return input.trim().length > 0;
				},
				'Save': function(input) {
					this.storage({
						이름: input
					});
					return true;
				},
				'Revert': function() {
					this.storage({
						이름: ''
					});
				},
				'Warning': '이름을 입력해야 합니다.'
			}
		},
		function() {
			const 이름 = monogatari.storage().이름;
			if (((이름.charCodeAt(이름.length - 1)) - 0xac00) % 28) {
				monogatari.storage({
					이: '이',
					아: '아'
				});
			}
		},
		'show character ㅈ ㅎ at left',
		'show character ㄱ ㅎ at right',
		'ㅈ ……            아! 기억났다. {{이름}}{{이}} 맞지?',
		{
			'Choice': {
				'1': {
					'Text': '맞아.',
					'Do': 'ㄱ 그보다 너도 들어봐.            얘가 자꾸 자기가 내년까지 10cm는 더 클 수 있다는 거 있지?'
				},
				'2': {
					'Text': '무슨 얘기 하고 있었어?',
					'Do': 'ㄱ 그게 말이야, 얘가 자꾸 자기가 내년까지 10cm는 더 클 수 있다는 거 있지?'
				},
			}
		},
		'show character ㅈ ㅂ at left',
		'show character ㄱ ㅋ at right',
		'ㅈ 클 수 있어!',
		'show character ㄱ ㅠ at right',
		'ㄱ 글쎄다….',
		'ㄱ 맞다, {{이름}}{{이}} 네가 전에 무슨 책에서 예상 키 계산하는 법을 본 적 있다고 하지 않았어?',
		{
			'Choice': {
				'1': {
					'Text': '아, 맞아.',
					'Do': 'ㄱ 그러니까… 우리 학급 문고에 있는 책이었지?'
				},
				'2': {
					'Text': '기억이 잘 안 나.',
					'Do': 'ㄱ 왜, 전에 우리 학급 문고에 있는 책 읽고 얘기해 줬었잖아.'
				},
			}
		},
		'show character ㅈ ㄴ at left',
		'ㅈ 예상 키…? 그런 걸 계산할 수가 있어?',
		'show character ㅈ ㅋ at left',
		'show character ㄱ ㅎ at right',
		'ㅈ 우유를 얼마나 많이 먹었는지, 운동을 얼마나 했는지 같은 걸로 키를 예상하는 거야? 나 완전 자신 있어!',
		'ㅈ 어떻게 계산하는 건데?',
		'ㄱ 음…. 나도 잘 기억이 안 나는데.',
		'ㄱ {{이름}}{{아}}, 그 책에서 그 부분 한 번만 더 읽어보고 와 줄래?',
		'show scene 교실1',
		'wait 1000',
		'<span style="color:lightblue;"> 학급 문고에 있는 책을 클릭해 보세요. </span>',
		'jump 1교실1',
	],

	'1교실1': [
		'show scene 교실1',
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage('ㅊ1') != 1) {
						return '1';
					}
					else {
						return '0';
					}
				},
				'0': '<span style="color:lightblue;">원하는 내용은 찾았나요? 책을 다시 읽을 수도 있고, 친구들에게 돌아가서 읽은 내용을 얘기해줄 수도 있습니다. </span>',
				'1': 'next'
			}
		},
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t11',
					'Class': 't11',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ1',
					'Class': 'ㅊ1',
				}
			}
		}
	],

	'ㅊ1': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ지금독립하는중입니다.jpg with fadeIn',
		'centered ',
		'show background ㅊ with fadeIn',
		'hide image ㅊ지금독립하는중입니다.jpg with fadeOut',
		'wait 300',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p><p>이 시기를 전후해서 가장 큰 변화는 키가 크는 것이다. 자고 나면 쑥쑥 자라는 &apos;폭풍 성장기&apos;가 온다. 남자의 경우 14세나 15세, 즉 중 2, 3학년경에 가장 많이 자라고, 여자는 그보다 2년 정도 먼저 자라기 시작한다. 여자들은 먼저 자라는 만큼, 먼저 성장이 끝난다.</p>',
		'책 그러니 지금 중학생인 친구들은 같은 반 남자아이들이 키가 작더라도 함부로 놀리면 안 된다. 고등학생 때 다시 만나 보면 나는 그때 그대로인데, 그 친구들은 훌쩍 자라 있을 가능성이 높다.남자는 여자와 달리 청소년기 후기까지도 꾸준히 키가 크는 경향이 있다. 많이 자랄 때에는 1년에 10~12cm 정도까지 자란다. &apos;폭풍성장&apos;을 1년만 하느냐 2, 3년 계속 하느냐에 따라 키 차이가 나는 것이다.',
		'책 그렇다면 과연 내 키는 어디까지 자랄 수 있을까? 매일 줄넘기를 하고, 농구를 하고, 스트레칭을 하고, 우유를 열심히 마시면 180cm를 훌쩍 넘길 수 있을까? 그렇다고 말해 주고 싶지만, 의사의 양심상 그럴 수가 없다.',
		'책 안타깝지만 키는 부모의 유전적 영향에서 벗어나기 어렵다. 유전의 영향이 70% 정도는 된다는 것이 의학적으로 알려진 사실이다. 키가 큰 부모를 두면 키가 크고, 작은 부모를 두면 작다. (그렇다고 부모님을 너무 원망하지는 마시길!)',
		'책 최종 키가 얼마나 될지 궁금해할 친구들을 위해 힌트를 하나 주겠다. 내 최종 키의 예상치를 추정하는 방법이 있다. 아버지의 키와 어머니의 키를 더한 뒤 2로 나누어 평균값을 낸 다음에 남자는 6.5cm를 더하고, 여자는 6.5cm를 빼면 된다. 예를 들어 아버지가 180cm, 어머니가 160cm라면, 평균 170cm이므로 아들은 176.5cm정도, 딸은 163.5cm 정도를 기대할 수 있다.',
		'책 여기에 수면, 운동, 영양 상태 등이 30% 정도 영향을 미친다. 그러니 키를 키우고 싶으면 내가 갈 수 있는 평균치를 빨리 달성한 다음, 숨어 있는 30%를 극대화해서 최대한 커질 수 있도록 하는 것이 현실적이다. <p style="font-size:0.8em; color:darkgrey;"> 하지현, 『지금 독립하는 중입니다』, 창비, 2017, 18~21쪽.</p>',
		function() { monogatari.storage().ㅊ1 += 1 },
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ1 == true
				},
				'True': 'jump 1교실1',
				'False': 'jump 1교실2'
			}
		}
	],

	't11': [
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().ㅊ1 > 0) {
						return '1';
					} else {
						return '0';
					}
				},
				'1': 'jump 1-2',
				'0': 'jump t11-1',
			}
		}
	],

	't11-1': [
		'show scene 교실',
		'show character ㄱ ㅇ',
		'ㄱ 우리 반 학급 문고는 사물함 위에 있잖아. 잊은 건 아니지?',
		'jump 1교실1',
	],

	'1-2': [
		'show scene 교실',
		'show character ㅈ ㅇ at left',
		'show character ㄱ ㅇ at right',
		'ㅈ {{이름}}{{아}}, 그 책 찾았어?',
		'ㅈ 키에 가장 많은 영향을 주는 게 뭐래?',
		{
			'Choice': {
				'1': {
					'Text': '유전',
					'Do': 'jump 1-3'
				},
				'2': {
					'Text': '수면과 운동',
					'Do': 'jump 1-2-2',
				},
				'3': {
					'Text': '영양 상태',
					'Do': 'jump 1-2-3',
				},
				'4': {
					'Text': '절실한 마음',
					'Do': 'jump 1-2-4',
				},
			}
		},
	],

	'1-2-1': [
		'show character ㅈ ㅇ at left',
		'ㅈ 농담하지 말고 제대로 알려줘! <b>키에 가장 많은 영향을 주는 게 뭐래?</b>',
		{
			'Choice': {
				'1': {
					'Text': '유전',
					'Do': 'jump 1-3'
				},
				'2': {
					'Text': '수면과 운동',
					'Do': 'jump 1-2-2',
					'Clickable': function() {
						return monogatari.storage().ㅅ012
					},
				},
				'3': {
					'Text': '영양 상태',
					'Do': 'jump 1-2-3',
					'Clickable': function() {
						return monogatari.storage().ㅅ013
					},
				},
				'4': {
					'Text': '절실한 마음',
					'Do': 'jump 1-2-4',
					'Clickable': function() {
						return monogatari.storage().ㅅ014
					},
				},
			}
		},
	],

	'1-2-2': [
		'show character ㅈ ㅋ at left',
		'ㅈ 정말? 나 요즘 하루에 아홉 시간은 자고 있어!',
		'show character ㄱ ㅠ at right',
		'ㄱ 얘 놀리지 말자, {{이름}}{{아}}. 그런 내용 아니었잖아….',
		function() { monogatari.storage().ㅅ012 = false; },
		'jump 1-2-1'
	],
	'1-2-3': [
		'show character ㅈ ㅋ at left',
		'ㅈ 정말? 나 삼시세끼랑 간식 전부 꼬박꼬박 챙겨먹고 있어!',
		'ㅈ 우유도 하루 한 잔씩은 마신다고.',
		'show character ㄱ ㅠ at right',
		'ㄱ 얘 놀리지 마, {{이름}}{{아}}. 그런 내용 아니지 않아…?',
		function() { monogatari.storage().ㅅ013 = false; },
		'jump 1-2-1'
	],
	'1-2-4': [
		'show character ㅈ ㅡ at left',
		'ㅈ ……',
		'show character ㄱ ㅡ at right',
		'ㄱ ……',
		'show character ㅈ ㅇ at left',
		'ㅈ 미안….           나 그런 걸 믿을 나이는 아니라서….',
		function() { monogatari.storage().ㅅ014 = false; },
		'jump 1-2-1'
	],
	'1-3': [
		'show character ㅈ ㄴ at left',
		'ㅈ ……            ……            !',
		'ㅈ 유전의 영향이 70%나 된다고……?',
		'ㄱ 이 공식을 바탕으로 예상 키를 계산해봐. 어, 그러니까…….',
		'show character ㅈ ㅡ at left',
		'ㅈ ……',
		'show character ㅈ ㅇ at left',
		'ㅈ 그러니까……            거기에 6.5cm를 더하면……            말도 안 돼!',
		'show character ㅈ ㅠ at left',
		'ㅈ 그…          그럴 리가 없어.           내 키가….           <b>내 키가 고작……!</b>',
		'show character ㄱ ㅎ at right',
		'ㄱ 오, 벌써 계산했어? 너 의외로 암산이 빠르구나?',
		{
			'Choice': {
				'1': {
					'Text': '굉장하다!',
					'Do': 'jump 1-4'
				},
				'2': {
					'Text': '내 예상 키도 계산해줘.',
					'Do': 'next'
				},
			}
		},
		'show character ㅈ ㅇ at left',
		'show character ㄱ ㅇ at right',
		'ㅈ 어? 응, 알겠어…….           그러니까… 성별에 따라 계산 방법이 다르댔지?',
		{
			'Choice': {
				'1': {
					'Text': '나는 남자야.',
					'Do': function() { monogatari.storage().성별 = 6.5; }
				},
				'2': {
					'Text': '나는 여자야.',
					'Do': function() { monogatari.storage().성별 = -6.5; }
				},
				'3': {
					'Text': '그냥 내가 알아서 계산할게.',
					'Do': 'jump 1-4'
				},
			}
		},
		'ㅈ 앗, 그 전에… 계산하려면 부모님 키를 알아야 한댔지? 너희 아버지랑 어머니 키 다 알고 있어?',
		{
			'Choice': {
				'1': {
					'Text': '당연하지!',
					'Do': 'jump 1-3-1'
				},
				'2': {
					'Text': '모르는데….',
					'Do': 'next'
				},
			}
		},
		'ㅈ 그럼 못 계산하지….',
		'jump 1-4',
	],
	'1-3-1': [
		'ㅈ 너희 아버지 키가 몇 cm신데?',
		{
			'Input': {
				'Text': '우리 아버지 키는…',
				'Type': 'number',
				'Validation': (input) => {
					return input.trim() < 220 && input.trim() > 120;
				},
				'Save': (input) => {
					monogatari.storage({ '아빠키': parseInt(input) });
				},
				'Warning': '단위는 cm입니다.'
			}
		},
		'ㅈ 너희 어머니 키는?',
		{
			'Input': {
				'Text': '우리 어머니 키는…',
				'Validation': (input) => {
					return input.trim() < 220 && input.trim() > 120;
				},
				'Save': (input) => {
					monogatari.storage({ '엄마키': parseInt(input) });
				},
				'Warning': '단위는 cm입니다.'
			}
		},
		'ㅈ 으음, 그러니까…',
		function() {
			monogatari.storage().예상키 = (monogatari.storage('엄마키') + monogatari.storage('아빠키')) / 2 + monogatari.storage('성별');
		},
		'ㅈ 네 예상 키는 {{예상키}}cm야.',
		{
			'Choice': {
				'1': {
					'Text': '그렇구나.',
					'Do': 'next'
				},
				'2': {
					'Text': '말도 안 돼!',
					'Do': 'ㅈ 그래도 같은 처지인 친구가 있어서 기쁘네….'
				},
			}
		},
		'jump 1-4'
	],
	'1-4': [
		'show character ㅈ ㅡ at left',
		'ㅈ ……',
		'show character ㅈ ㅠ at left',
		'ㅈ 하아아아아아아아아아아…. 내 키가 고작……. ',
		'show character ㄱ ㅎ at right',
		'ㄱ 너무 상심하지 마, 원숭아. 이제 와서 다시 태어날 수도 없는 일이잖아. 그냥 받아들여.',
		'ㅈ 하아아아…. 매일매일 싫어하는 멸치도 먹고 우유도 마시고… 그렇게 싫어하는 운동도 하고… 지금껏 갖은 노력을 다 해 왔는데.',
		'ㅈ 지금까지의 내 노력은…           전부 의미 없었던 걸까?',
		{
			'Choice': {
				'1': {
					'Text': '그렇지 않아!',
					'Do': 'next'
				},
				'2': {
					'Text': '나머지 30%가 있잖아.',
					'Do': 'next'
				},
			}
		},
		'show character ㅈ ㅡ at left',
		'ㅈ …….           !',
		'ㅈ 숨어 있는 30%를 극대화하라고…?',
		'ㅈ 하지만 고작 30%인 걸….',
		'show character ㄱ ㅇ at right',
		'ㄱ 응? 근데 30%도 그렇게 작은 건 아닐지도 몰라. 비록 네가 예상 키는 <b>아주아주 처참한</b> 편이지만….',
		'ㄱ 그래도 지금의 너는, 친구들에 비하면 그렇게 막 작은 편은 아닌 것 같은데?',
		'show character ㄱ ㅎ at right',
		'ㄱ 네 노력이 이미 어느 정도 성과를 보였다는 거지.',
		{
			'Choice': {
				'1': {
					'Text': '맞아!',
					'Do': 'next'
				},
				'2': {
					'Text': '듣고 보니 그렇네.',
					'Do': 'next'
				},
			}
		},
		'show character ㅈ ㄴ at left',
		'ㅈ ……',
		'ㅈ 그렇구나……. 30%는 나름 큰 숫자였구나…!',
		'show character ㅈ ㅎ at left',
		'ㅈ 고마워, 얘들아! 나 앞으로 더 노력할게.',
		'ㅈ 정말정말 고마워, {{이름}}{{아}}! 덕분에 의지가 생겼어!',
		'show character ㅈ ㅂ at left',
		'ㅈ 좋아, 오늘부터 줄넘기 양을 두 배로 늘려야지. 언젠가 190cm를 찍는 게 목표야!',
		'hide character ㅈ with fadeOut',
		'show character ㄱ ㅡ',
		'ㄱ ……',
		'show character ㄱ ㅠ',
		'ㄱ 잘된 일이긴 하지만, 190cm는 현실적으로 좀 어렵지 않을까……?',
		'hide character ㄱ with fadeOut',
		'wait 1000',
		function() { monogatari.storage().ㅋ1 = false },
		'<span style="color:lightblue;"> 잘 하셨습니다! </span>',
		'<span style="color:lightblue;"> 교실 밖에도 어려운 문제를 만났거나 고민을 가지고 있는 친구들이 있을 겁니다. 이런 식으로 그 친구들을 도울 수 있지 않을까요?</span>',
		'<span style="color:lightblue;"> 화살표를 눌러서 복도로 나가 봅시다.</span>',
		'jump 1교실2',
	],

	'1교실2': [
		'show scene 교실2',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t11-2',
					'Class': 't11-2',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ1',
					'Class': 'ㅊ1',
				},
				'm교실1': {
					'Text': '',
					'Do': 'jump 2-1',
					'Class': 'm교실1',
				}
			}
		}
	],

	't11-2': [
		'show scene 교실',
		'show character ㄱ ㅇ with fadeIn',
		'ㄱ 그러고 보니 아까 토끼가 너를 찾는 것 같던데?',
		'ㄱ 지금은 안 보이네…. 복도에 있으려나?',
		'hide character ㄱ ㅇ with fadeOut',
		'jump 1교실2',
	],

	/* 1일차 복도 */

	'1복도1': [
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ2 == false
				},
				'True': 'next',
				'False': 'jump 2-1',
			}
		},
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ3 == true
				},
				'True': 'next',
				'False': 'jump 1복도2'
			}
		},
		'show scene 복도1',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't12': {
					'Text': '',
					'Do': 'jump t12',
					'Class': 't12'
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ2',
					'Class': 'ㅊ2',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ3',
					'Class': 'ㅊ3',
				}
			}
		}
	],

	'2-1': [
		'show scene 복도 with fadeIn',
		'wait 500',
		'show character ㅂ ㅎ with fadeIn',
		'ㅂ 앗, {{이름}}{{아}}! 한참 찾았잖아!',
		{
			'Choice': {
				'1': {
					'Text': '나를?',
					'Do': 'ㅂ 응! 다른 게 아니라….'
				},
				'2': {
					'Text': '무슨 일이야?',
					'Do': 'ㅂ 그게, 다름이 아니라….'
				},
			}
		},
		'show character ㅂ ㅇ',
		'ㅂ 너 학교 도서관 자주 가지?',
		{
			'Choice': {
				'1': {
					'Text': '그런 편이지.',
					'Do': 'jump 2-1-1'
				},
				'2': {
					'Text': '가끔 가긴 해.',
					'Do': 'jump 2-1-2'
				},
				'3': {
					'Text': '아니. 가 본 적 없는데….',
					'Do': 'jump 2-1-3'
				},
			}
		},
	],

	'2-1-1': [
		'show character ㅂ ㅋ',
		'ㅂ 역시! 너만 믿고 있었어!',
		function() { monogatari.storage().도서관빈도 = 2 },
		function() { monogatari.storage().도서관가 = true },
		'show character ㅂ ㅇ',
		'ㅂ 있잖아, 다른 게 아니고….',
		'show character ㅂ ㅎ',
		'ㅂ 나랑 같이 도서관 좀 가 주라!',
		{
			'Choice': {
				'1': {
					'Text': '웬 도서관?',
					'Do': 'ㅂ 그게, 실은 내가 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				},
				'2': {
					'Text': '&apos;같이&apos;…?',
					'Do': 'ㅂ 응…! 실은 내가, 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				}
			}
		},
		'jump 2-2'
	],

	'2-1-2': [
		'show character ㅂ ㅋ',
		'ㅂ 가 봤다는 것만으로도 대단해!',
		function() { monogatari.storage().도서관빈도 = 1 },
		function() { monogatari.storage().도서관가 = true },
		'ㅂ 있잖아, 그럼….',
		'ㅂ 나랑 같이 도서관 좀 가 줄 수 있어?',
		{
			'Choice': {
				'1': {
					'Text': '웬 도서관?',
					'Do': 'ㅂ 그게, 실은 내가 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				},
				'2': {
					'Text': '&apos;같이&apos;…?',
					'Do': 'ㅂ 응…! 실은 내가, 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				}
			}
		},
		'jump 2-2'
	],

	'2-1-3': [
		'show character ㅂ ㅠ',
		'ㅂ 저,           정말?',
		function() { monogatari.storage().도서관빈도 = 0 },
		function() { monogatari.storage().도서관안가 = true },
		'show character ㅂ ㅡ',
		'ㅂ ……             ……',
		'show character ㅂ ㅇ',
		'ㅂ 그, 그럼 있잖아….',
		'show character ㅂ ㅎ',
		'ㅂ 이 기회에 나랑 같이 처음으로 도서관 가기를 시도해보지 않을래?',
		{
			'Choice': {
				'1': {
					'Text': '웬 도서관?',
					'Do': 'ㅂ 그게, 실은 내가 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				},
				'2': {
					'Text': '&apos;같이&apos;…?',
					'Do': 'ㅂ 응…! 실은 내가, 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				}
			}
		},
		'jump 2-2'
	],

	'2-2': [
		'show character ㅂ ㅇ',
		'ㅂ <b>&apos;우리 학교 친구들이 책을 읽는 이유&apos;</b>에 대해 조사해야 하거든?          그런데 요즘 학교에서 책 읽는 애들이 얼마나 있겠어?',
		'show character ㅂ ㅠ',
		'ㅂ 그래서 여지껏 아무 답변도 못 얻었다고 했더니, 선생님께서 그럼 학교 도서관에 가보라고 하시는 거야.',
		'ㅂ 거긴 책 읽는 애들만 있을 거 아니냐면서….',
		{
			'Choice': {
				'1': {
					'Text': '현명하시네.',
					'Do': 'ㅂ ……           근데, 문제가 있는데….'
				},
				'2': {
					'Text': '그럼 그냥 혼자 도서관에 가면 되잖아?',
					'Do': 'ㅂ ……           그게, 내가 실은…..'
				}
			}
		},
		'show character ㅂ ㅡ',
		'ㅂ ……',
		'vibrate 200',
		'show character ㅂ ㅂ',
		'ㅂ <span style="font-size:1.2em !important"><b> 나 사실 우리 학교 도서관 한 번도 가본 적 없단 말야…! </b></span>',
		'ㅂ <b>애들이 막,      평소엔 책 한 글자도 안 보는 애가 도서관을 다 왔다고 눈치 주면 어떡해?           내 발소리가 너무 커서 사서 선생님한테 쫓겨나게 되면 어떡하지?!<b>',
		'ㅂ <b>아니면, 들어가려면 무슨 자격 요건 같은 게 있는데 나만 몰랐던 거면…? 그래서 쪽 당하면 어떡해?!           너무너무너무 두렵단 말야!<b>',
		{
			'Choice': {
				'1': {
					'Text': '그럼 내가 같이 가 줄까?',
					'Do': 'jump 2-3'
				},
				'2': {
					'Text': '도서관은 그렇게 살벌한 곳이 아니야….',
					'Do': 'jump 2-2-2',
					'Condition': function() {
						return monogatari.storage('도서관가');
					}
				},
				'3': {
					'Text': '도서관이 그렇게 살벌한 곳이었어…?',
					'Do': 'jump 2-2-3',
					'Condition': function() {
						return monogatari.storage('도서관안가');
					}
				}
			}
		},
	],
	'2-2-2': [
		'show character ㅂ ㅠ',
		'ㅂ 그렇다고 해도, 가본 적 없는 곳을 혼자서 가는 건 너무너무 무서운 일이야….',
		{
			'Choice': {
				'1': {
					'Text': '그럼 내가 같이 가 줄게.',
					'Do': 'jump 2-3'
				}
			}
		}
	],
	'2-2-3': [
		'show character ㅂ ㅠ',
		'ㅂ 설령 아니라 해도, 가본 적 없는 곳을 혼자서 가는 건 너무너무 무서운 일이야….',
		{
			'Choice': {
				'1': {
					'Text': '그럼 내가 같이 가 줄게.',
					'Do': 'jump 2-3'
				}
			}
		}
	],

	'2-3': [
		'show character ㅂ ㅇ',
		'ㅂ 정말로……?',
		'show character ㅂ ㅋ',
		'ㅂ 진짜 고마워!! {{이름}}{{이}} 네 덕분에 살았어!',
		'show character ㅂ ㅎ',
		'ㅂ 혹시 오늘 점심 시간에 시간 괜찮아? 그때 도서관 앞에서 만나자!',
		'show character ㅂ ㅋ',
		'ㅂ 기다리고 있을게! {{이름}}{{아}}, 진짜진짜 고마워!!',
		function() { monogatari.storage().ㅋ2 = false },
		'hide character ㅂ with FadeOut',
		'wait 500',
		'jump 1복도1'
	],

	't12': [
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().ㅊ2 > 0) {
						return '1';
					} else {
						return '0';
					}
				},
				'1': 'next',
				'0': 'jump 3-1',
			}
		},
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().ㅁ4 == true) {
						return '1';
					} else {
						return '0';
					}
				},
				'1': 'jump 3-1',
				'0': 'jump 3-2',
			}
		}
	],

	'3-1': [
		'show scene 복도 with fadeIn',
		'show character ㅊ ㅡ with fadeIn',
		'ㅊ ……',
		'show character ㅊ ㅇ',
		'ㅊ 새들은 무슨 생각을 할까?',
		'show character ㅊ ㅡ',
		'ㅊ ……',
		'show character ㅊ ㅇ',
		'ㅊ 어쩌면 새랑은 친구가 될 수도 있지 않을까? 앵무새는 말도 할 수 있으니까….',
		function() { monogatari.storage().ㅁ4 = false },
		'jump 1복도1',
	],

	'ㅊ2': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ과학자가되는시간.jpeg',
		'centered ',
		'show background ㅊ with fadeIn',
		'hide image ㅊ과학자가되는시간.jpeg',
		'wait 300',
		'책 <p style="text-align:center; font-weight:bold;"> 새도 생각할까?</p><b>아이린 페퍼버그</b>(Irene Pepperberg)는  4살 때 아버지에게 앵무새 한 마리를 선물로 받았습니다. 평생 새를 사랑하게 된 시작점이었죠.',
		'책 아이린은 어린 시절 동화 『닥터 두리틀』을 읽고 큰 감동을 받았다고 해요. 주인공 두리틀 박사는 인간보다 동물을 치료하는 걸 좋아하는 인물이에요. 아이린은 또래 아이들과 어울리기보다는 앵무새와 더 가깝게 지냈던 내성적인 소녀였기에 큰 울림을 받았죠. 아이린은 앵무새에게 말하는 법을 가르쳤고 자신을 따라 하게 했어요.',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p> 아이린은 원래 화학을 전공하려고 했지만, 새를 너무 좋아하다 보니 동물의 인지 능력을 연구하는 학문인 동물인지학에 빠지게 되었습니다. 비인간 동물들이 생각을 할 수 있는지에 관해서는 과학자마다 의견이 다르답니다. 일부 과학자는 오직 인간만이 복잡한 사고를 할 수 있다고 생각해요. 반면에 침팬지와 돌고래처럼 지능이 높다고 알려진 일부 동물들 또한 생각할 수 있다고 여기는 과학자들도 있지요. 한편 새가 복잡한 사고를 할 수 있다고 믿는 과학자는 매우 드물었습니다.',
		'책 1977년, 아이린은 새가 생각을 할 수 있는지 알아보기 위해 아프리카 회색앵무를 한 마리 샀습니다. 이름은 알렉스라고 지었지요. 알렉스는 50가지 물체를 식별하고 150개 단어를 말할 수 있었어요. 물론 많은 앵무새가 &#39;말&#39;을 할 수 있습니다. 하지만 그저 인간의 목소리를 흉내 낼 뿐이고 그 뜻을 이해하지는 못하지요.',
		'책 그러나 알렉스는 달랐어요. 크고 작은 것, 같은 것과 다른 것에 대한 개념을 이해하는 듯 보였죠. 알렉스에게 쟁반 위에 빨간 블록이 몇 개나 있는지 물어보면 알렉스는 그 쟁반에 다른 색깔과 모양의 물체가 있더라도 정확하게 대답했습니다. 알렉스는 “미안해.” “견과류 먹고 싶어." "(새장으로) 돌아갈래." 같은 말로 욕구를 표현할 줄도 알았습니다.',
		'책 알렉스가 단지 &#39;발성&#39;한 것인지 아니면 뜻을 알고 말한 것인지에 대해서는 아직도 과학자들의 의견이 분분합니다. 하지만 어느 쪽이든 알렉스는 우리가 새를 좀 더 이해할 수 있게 해 줬어요. 알렉스는 31살, 아직 이른 나이에 세상을 떠날 때(아프리카 회색앵무는 감금 상태로 60년까지 살 수 있어요.) 아이린에게 마지막으로 이렇게 말했습니다. “잘 지내, 사랑해."<p style="font-size:0.8em; color:darkgrey;"> 템플 그랜딘 저, 이민희 역, 『과학자가 되는 시간』, 창비, 2022, 116~118쪽. </p>',
		function() { monogatari.storage().ㅊ2 += 1 },
		'jump 1복도1'
	],

	'ㅊ3': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ유튜브에빠진너에게.jpeg',
		'centered ',
		'hide image ㅊ유튜브에빠진너에게.jpeg',
		'show background ㅊ with fadeIn',
		'wait 300',
		'책 <p style="text-align:center; font-weight:bold;"> 정보 편식을 유도하는 알고리즘</p><br>여러분은 자라면서 &quot;골고루 먹어야 건강해진다&quot;는 말을 귀에 못이 박히도록 들었을 거예요. 왜 내가 좋아하는 음식만 골라 먹으면 안 될까요? 여러 종류의 영양소를 고루 섭취하지 않으면 몸에 이상이 나타날 수 있기 때문입니다. 정보도 마찬가지입니다. 내 입맛에 맞는 정보만 쏙쏙 골라 받아들이면 사고의 균형이 깨지고, 편견을 가진 채로 세상을 이해하게 됩니다.',
		'책 유튜브는 어떻게 정보 편식을 유도할까요? 답은 알고리즘에 있습니다. 알고리즘은 이용자들의 조회 수와 이용 시간을 늘리는방식으로 설계되었어요. 그래야 유튜브의 기업 가치가 높아지고, 수익도 증가하기 때문입니다. 이를 위한 가장 좋은 방법은 이용자의 시청 기록을 분석하여 이와 유사하거나, 관심 있어 할 만한 정보만을 계속 추천해 주는 겁니다.',
		'책 2018년 영국 언론 &lt;가디언&gt;은 유튜브에서 3년 동안 추천 시스템을 다룬 엔지니어 기욤 샤슬로Guillaume Chaslot의 인터뷰를 실었는데요. 내용이 매우 의미심장합니다. 그는 &quot;유튜브의 추천 알고리즘은 이용자가 머무는 시간을 늘리는 게 목적이어서 필터 버블과 가짜 뉴스를 만들어 낸다. 유튜브 동영상의 품질과 다양성 개선을 위한 알고리즘 수정 방안을 제시했지만 채택되지 않았다.&quot;라고 말했습니다.',
		'책 &#39;필터 버블(filter bubble)&#39;이란 비눗방울처럼 생각이 그 안에 갇혀서 벗어나지 못하는 현상을 의미합니다. 유튜브가 이용자의 견해와 일치하는 콘텐츠만을 계속 보여 준다면 해당 이용자의 생각은 더 굳어지게 되겠지요. 유튜브 영상이 소셜 미디어를 통해 비슷한성향의 사람들에게 공유되면, 나의 생각은 더욱 힘을 얻게 됩니다. 유사한 의견을 가진 사람들 위주로 소통하다 보니 내 생각이 옳다고 점점 더 확신하게 되는 거예요.',
		'책 알고리즘은 이처럼 이용자의 균형 잡힌 사고를 방해할 수 있습니다. 유튜브를 시청하는 수많은 사람들은 알고리즘의 지배에서 자유롭지 못합니다. 물론 알고리즘 때문이 아니어도 자신의 성향에 맞는 유튜브 채널을 구독해 스스로 편향된 사고를 강화하는 경우도 있지요. 정보 편식은 사람들 간 분열을 조장하고, 건강하지 못한 개인과 사회를 만듭니다. 따라서 1인 미디어의 맞춤형 알고리즘에 지나치게 의존하면 위험하다는 것을 깨달아야 합니다.',
		'책 자신이 좋아하는 콘텐츠를 즐기는 게 문제는 아닙니다. 관심 있는 주제에 대해서 깊이 있게 공부하는 기회가 될 수도 있지요. 다만 가치관을 형성하는 과정에서 알고리즘의 추천에만 의지한다면, 사고가 한쪽으로 기울 수 있다는 사실을 인지해야 합니다. 유튜브를 볼 때도, 일상생활에서도 다양한 사람들의 의견을 듣는 열린 태도가 필요합니다.<p style="font-size:0.8em; color:darkgrey;"> 구본권, 『유튜브에 빠진 너에게』 , 북트리거, 2020, 74~76쪽.</p>',
		'jump 1복도1',
	],

	'3-2': [
		'show scene 복도',
		'show character ㅊ ㅡ with fadeIn',
		'ㅊ ……           !',
		'show character ㅊ ㅇ',
		'ㅊ 뭐야,           {{이름}}{{이}}였구나….',
		'ㅊ 무슨 일이야…?',
		{
			'Choice': {
				'1': {
					'Text': '앵무새가 뜻을 알아서 인간의 말을 하는 건 아니래.',
					'Do': function() { monogatari.storage().앵무긍정 = true }
				},
				'2': {
					'Text': '앵무새도 생각을 할 수 있을지도 모른대.',
					'Do': function() { monogatari.storage().앵무긍정 = false }
				},
				'3': {
					'Text': '아프리카 회색앵무는 감금 상태로 60년까지 살 수 있대.',
					'Do': 'jump 3-2-1',
				},
			}
		},
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().앵무긍정 == true
				},
				'True': function() { monogatari.storage().긍정 += 1 },
				'False': function() { monogatari.storage().긍정 -= 1 },
			}
		},
		'jump 3-3'
	],

	'3-2-1': [
		'show character ㅊ ㅡ',
		'ㅊ …….           ?',
		'show character ㅊ ㅇ',
		'ㅊ 아프리카……           뭐라고?',
		{
			'Choice': {
				'1': {
					'Text': '미안. 말이 헛나왔어.',
					'Do': 'next'
				},
			}
		},
		'ㅊ 아…….          나도 가끔 그럴 때 있어. 괜찮아….',
		'ㅊ ……그래서, 원래 무슨 말을 하려고 했었어?',
		{
			'Choice': {
				'1': {
					'Text': '앵무새가 뜻을 알아서 인간의 말을 하는 건 아니래.',
					'Do': function() { monogatari.storage().긍정 -= 1 }
				},
				'2': {
					'Text': '앵무새도 생각을 할 수 있을지도 모른대.',
					'Do': function() { monogatari.storage().긍정 += 1 }
				},
				'3': {
					'Text': '아프리카 회색앵무는 감금 상태로 60년까지 살 수 있대.',
					'Clickable': function() {
						return monogatari.storage().false
					},
					'Do': 'end',
				},
			}
		},
		'jump 3-3'
	],

	'3-3': [
		'show character ㅊ ㅡ',
		'ㅊ ……           ……           ?',
		'show character ㅊ ㅇ',
		'ㅊ 갑자기 웬 앵무새…?',
		{
			'Choice': {
				'1': {
					'Text': '저기에 앵무새 얘기가 나오는 책이 있길래.',
					'Do': 'next'
				},
				'2': {
					'Text': '네가 궁금해할 것 같아서.',
					'Do': 'jump 3-3-1'
				},
			}
		},
		function() { monogatari.storage().독서언급 += 1 },
		'ㅊ 책……?',
		'jump 3-3-2'
	],

	'3-3-1': [
		function() { monogatari.storage().다정 += 1 },
		'show character ㅊ ㅡ',
		'ㅊ …… ?',
		'show character ㅊ ㅇ',
		'ㅊ 마침 그런 게 궁금하던 참이긴 했는데……. 어떻게 알았어?',
		'show character ㅊ ㅡ',
		'ㅊ ……',
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().앵무긍정 == true
				},
				'True': 'ㅊ 근데 좀 신기하다……. 책 속에는 똑똑한 앵무새들이 많이 나오잖아. 난 지금껏… 아마 소설적 허용일 거라고 생각해왔는데…….',
				'False': 'ㅊ 근데 좀 아쉽다……. 책 속에는 똑똑한 앵무새들이 많이 나오잖아. ……소설적 허용일 거라고는 예상했지만.'
			}
		},
		'show character ㅊ ㅡ',
		'ㅊ …….',
		'show character ㅊ ㅎ',
		'ㅊ …고마워. {{이름}}{{이}} 넌 아는 게 되게 많은 것 같아….',
		{
			'Choice': {
				'1': {
					'Text': '이건 저기 있는 책에 나와 있었던 내용이야.',
					'Do': 'jump 3-3-2'
				},
				'2': {
					'Text': '너도 책을 많이 읽으니까 이런 걸 잘 알 줄 알았는데.',
					'Do': 'next'
				},
			}
		},
		'show character ㅊ ㅋ',
		'ㅊ 좀 부끄럽네……. 난 그렇게 책을 잘 읽는 건 아니야.',
		'show character ㅊ ㅇ',
		'ㅊ 문학이 아닌 책들은…             나한테 너무 어려운 것 같아. &#39;지식책&#39;이랄까, &#39;정보책&#39;이랄까…….',
		'jump 3-4'
	],

	'3-3-2': [
		'show character ㅊ ㅇ',
		'ㅊ 아, 표지에 동물 발자국이나 나뭇잎이나… 그런 게 그려져 있었던 책을 말하는 거야? 복도 서가에서 본 적 있어…….',
		'show character ㅊ ㅠ',
		'ㅊ 소설인 줄 알고 집어들었는데… 그런데 동식물에 관한 책이더라……. 그래서 읽지는 않았지만.',
		{
			'Choice': {
				'1': {
					'Text': '소설이 아닌 책은 별로야?',
					'Do': 'next'
				},
				'2': {
					'Text': '과학에 관련된 책은 별로야?',
					'Do': 'next'
				},
			}
		},
		'show character ㅊ ㅇ',
		'ㅊ 으응……. 정확히는 문학이 아닌 책들이… 나한테는 너무 어려워. 뭐라고 부르더라…? &#39;지식책&#39;이랄까, &#39;정보책&#39;이랄까…….',
		'jump 3-4'
	],

	'3-4': [
		'show character ㅊ ㅠ',
		'ㅊ 딱히 이야기가 없다 보니, 재미를 느끼기도 좀 어렵고…….',
		{
			'Choice': {
				'1': {
					'Text': '나도 그래!',
					'Do': 'jump 3-4-1'
				},
				'2': {
					'Text': '하지만 정보를 담고 있는 책들도 재밌어.',
					'Do': 'jump 3-4-2'
				},
				'3': {
					'Text': '나한테는 둘 다 재미없던데.',
					'Do': 'jump 3-4-3'
				},
			}
		},
	],

	'3-4-1': [
		function() { monogatari.storage().문학 += 1 },
		'show character ㅊ ㅎ',
		'ㅊ ……! 그치?',
		'show character ㅊ ㅇ',
		'ㅊ 무언가를 공부하기 위한 책은 교과서랑 문제집만으로도 충분하다고 생각해….',
		'jump 3-5'
	],

	'3-4-2': [
		function() { monogatari.storage().문학 -= 1 },
		'show character ㅊ ㅠ',
		'ㅊ ……           그래……?',
		'show character ㅊ ㅇ',
		'ㅊ 그래……. 역시 책을 읽는 데에 있어서도, 편식은 좋지 않겠지….',
		'ㅊ ……',
		'jump 3-5'
	],

	'3-4-3': [
		function() { monogatari.storage().독서재미 -= 1 },
		'show character ㅊ ㅡ',
		'ㅊ ……',
		'show character ㅊ ㅇ',
		'ㅊ 음…… 그럴 수 있지.',
		'jump 3-5',
	],

	'3-5': [
		'show character ㅊ ㅇ',
		'ㅊ …          …            !           점심 시간이네….',
		'ㅊ 음, 그러니까…….',
		'show character ㅊ ㅡ',
		'ㅊ ……',
		'show character ㅊ ㅎ',
		'ㅊ 저…… 점심 맛있게 먹어, {{이름}}{{아}}.',
		'hide character ㅊ with fadeOut',
		function() { monogatari.storage().ㅋ3 = false },
		'jump 1복도2'
	],

	'1복도2': [
		'show scene 복도2',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				'm복도1': {
					'Text': '',
					'Do': 'jump 4-1',
					'Class': 'm복도1',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ2',
					'Class': 'ㅊ2',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ3',
					'Class': 'ㅊ3',
				}
			}
		}
	],

	'4-1': [
		'show scene 도서관앞',
		'show character ㅂ ㅡ',
		'ㅂ ……!',
		'show character ㅂ ㅋ',
		'ㅂ {{이름}}{{아}}, 왔구나! 기다리고 있었어.',
		'show character ㅂ ㅂ',
		'ㅂ 으으, 긴장돼…….',
		{
			'Choice': {
				'1': {
					'Text': '긴장 풀어. 내가 같이 있잖아',
					'Do': 'jump 4-1-1'
				},
				'2': {
					'Text': '고작 도서관 가는 걸로 무슨 긴장씩이나.',
					'Do': 'jump 4-1-2'
				},
				'3': {
					'Text': '나도 긴장돼!',
					'Do': 'next',
					'Condition': function() {
						return monogatari.storage('도서관안가');
					}
				},
			}
		},
		'show character ㅂ ㅋ',
		'ㅂ 아, 아냐 {{이름}}{{아}}! 우린 할 수 있어. 혼자가 아니라 둘이잖아!',
		'show character ㅂ ㅡ',
		'ㅂ ……',
		'show character ㅂ ㅋ',
		'ㅂ …그러니까 먼저 들어가 줄래? 난 네 뒤에 숨어서, 따라서 들어갈 테니까…….',
		{
			'Choice': {
				'1': {
					'Text': '도서관으로 들어간다.',
					'Do': 'jump 4-2'
				}
			}
		}
	],

	'4-1-1': [
		'show scene 도서관앞',
		function() { monogatari.storage().다정 += 1 },
		'show character ㅂ ㅎ',
		'ㅂ {{이름}}{{아}}…! 네가 없었다면 나는…….',
		'ㅂ 난 너만 믿을게!           ……           그러니까 앞장서 주라…!',
		{
			'Choice': {
				'1': {
					'Text': '도서관에 들어간다.',
					'Do': 'jump 4-2'
				}
			}
		}
	],

	'4-1-2': [
		'show scene 도서관앞',
		function() { monogatari.storage().다정 -= 1 },
		'show character ㅂ ㅠ',
		'ㅂ 그치만……           ……           .',
		'show character ㅂ ㅂ',
		'ㅂ …아니야, 난 할 수 있어!',
		'ㅂ {{이름}}{{아}}, 앞장서 줘! 난 네 뒤에 숨어서 몰래 따라 들어갈 테니까….',
		{
			'Choice': {
				'1': {
					'Text': '도서관에 들어간다.',
					'Do': 'jump 4-2'
				}
			}
		}
	],

	'4-2': [
		'show scene 서서관 with fadeIn',
		'wait 300',
		'show character ㅂ ㅇ',
		'ㅂ 오…….',
		'show scene #000000 with fadeIn',
		'wait 100',
		'show scene 도서관 with fadeIn',
		'wait 300',
		'show character ㅂ ㅎ',
		'ㅂ 무지 넓다!',
		'show scene #000000 with fadeIn',
		'wait 100',
		'show scene 동서관 with fadeIn',
		'wait 300',
		'show character ㅂ ㅎ',
		'ㅂ 조금 의외다…. 도서관은 책밖에 없을 줄 알았는데… 앉을 자리들만 보면 무슨 카페 같아!',
		'show character ㅂ ㅇ',
		'ㅂ 그리고…          내가 상상했던 것만큼 막 조용하지는 않네?           물론 점심시간 때의 우리 교실이나 복도보다는 조용하지만…….',
		'show character ㅂ ㅋ',
		'ㅂ …다행이다! 작은 목소리로라면 애들한테 말을 걸고 다녀도 괜찮을 것 같아.',
		'show character ㅂ ㅎ',
		'ㅂ 좋아! 온 김에 설문조사를 완전히 끝내 버리고 가야겠어. {{이름}}{{아}}, 우선 누구한테 말을 걸어 볼까?',
		'show scene #ffffff',
		'centered 예시작 분량은 여기까지입니다. <br> 수업 때 보여드렸던 분량에서 거의 진척이 없다시피 한 것 같아서 조금 민망하네요…. 이 뒤로도 조금 더 개발하긴 했는데, 애매하기만 한 내용인 것 같아서 제외했습니다.',
		'centered 플레이해주셔서 감사합니다. <br> (이 뒤로 도서관 맵이 이어지긴 하지만, 아무 내용도 없습니다.)',
		'jump 1서서관1',
	],

	'1서서관1': [ //팁 뜨기 전의 도서관
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().도서관안내 == 0
				},
				'True': 'next',
				'False': 'jump 1서서관2'
			}
		},
		function() { monogatari.storage().도서관안내 += 1 },
		'show scene 서서관1 with fadeIn',
		'wait 500',
		'ㅂ 여긴 한눈에 볼 수 없을 만큼 넓네! 도서관의 오른쪽 편을 살펴보려면 화살표를 눌러줘.',
		'show scene 서서관1',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t13',
					'Class': 't13',
				},
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}
	],

	'1서서관2': [ //진행도0
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().도서관진행도 == 3) {
						return '1';
					} else if (monogatari.storage().도서관진행도 == 2) {
						return '2';
					} else {
						return '0';
					}
				},
				'0': 'next',
				'1': 'jump ',
				'2': 'jump ',
			}
		},
		'show scene 서서관1',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t13',
					'Class': 't13',
				},
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}

	],

	'1서서관3': [ //진행도 1 (펭귄만 있음)
		'show scene 서서관2',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}
	],

	'1서서관4': [ //진행도 2 (최양 등장)
		'show scene 서서관3',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				't3': {
					'Text': '',
					'Do': 'jump t15',
					'Class': 't15',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}
	],

	'1동서관1': [ //고양원숭 등장 이전 동서관
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().도서관진행도 == 1
				},
				'True': 'jump 1동서관2',
				'False': 'jump 1동서관2'
			}
		},
		'show scene 동서관1 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t16',
					'Class': 't16',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ7',
					'Class': 'ㅊ7',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ8',
					'Class': 'ㅊ8',
				},
				'm동서관1': {
					'Text': '',
					'Do': 'jump 1서서관2',
					'Class': 'm동서관1',
				}
			}
		}
	],

	'1동서관2': [ //고양원숭 등장 이후 동서관
		'show scene 동서관2 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t16',
					'Class': 't16',
				},
				't2': {
					'Text': '',
					'Do': 'jump t17',
					'Class': 't17',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ7',
					'Class': 'ㅊ7',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ8',
					'Class': 'ㅊ8',
				},
				'm동서관1': {
					'Text': '',
					'Do': 'jump 1서서관2',
					'Class': 'm동서관1',
				}
			}
		}











	],

	'ㅊ4': [
		'jump 1서서관1',
	],
	'ㅊ5': [
		'jump 1서서관1',
	],
	'ㅊ6': [
		'jump 1서서관1',
	],
	'ㅊ7': [
		'jump 1동서관2',
	],
	'ㅊ8': [
		'jump 1동서관2',
	],

	't13': [ //이호랑
		'jump 1서서관2',
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ5 == 1
				},
				'True': 'jump 5-2',
				'False': 'next'
			}
		},
		'ㅂ 안녕, 호랑아! 다름이 아니라, 수행평가 때문에 설문조사를 하고 있는데….',
		'ㅂ 혹시 지금 뭐 읽고 있어?',
		'ㅇ ……',
		'ㅇ 문제집.',
		'ㅂ ……            ……            엥?',
		{
			'Choice': {
				'1': {
					'Text': '문제집을 왜 도서관에서 풀고 있어?',
					'Do': 'next'
				},
			}
		},
		'ㅇ 교실보다 조용하니까.',
		'ㅂ ……             그렇구나!',
		'ㅂ ……            무, 문제집도 책인가? 문제집을 푸는 것도 독서를 하는 거라고 할 수 있나?',
		{
			'Choice': {
				'1': {
					'Text': '문제집 풀이도 독서 아닐까?',
					'Do': 'ㅂ …그런가? 하지만 조금 애매한 것 같은데…….'
				},
				'2': {
					'Text': '문제집 풀이가 독서는 아니지….',
					'Do': 'ㅂ …그런가? 잘 모르겠어…. 역시 설문에 넣기는 애매하겠지…?'
				}
			}
		},
		'ㅇ ……',
		'ㅇ 그래서 무슨 일이야?',
		'ㅂ 앗, 그게… 그럼 혹시 문제집 말고 다른 책은 안 읽어? 우리 학교 친구들이 책을 읽는 이유를 조사하고 있는데…….',
		'ㅇ 안 읽어.',
		'ㅂ ……            아,          진짜로…?           그렇구나…….',
		'ㅂ 지, 진짜로? 전혀……?',
		'ㅇ 응.',
		'ㅂ 그, 그래도…….',
		{
			'Choice': {
				'1': {
					'Text': '그럼 대신에 안 읽는 이유를 물어보는 건 어때?',
					'Do': 'ㅂ 앗, 그럴까…? 네가 책을 안 읽는 이유는 뭐야?'
				},
				'2': {
					'Text': '왜 책을 안 읽는데?',
					'Do': 'next'
				},
			}
		},
		'ㅇ 시간이 없어서.          공부만 하기에도 시간이 부족한데, 성적이랑 관련 없는 거 읽을 시간이 어디 있겠어?',
		'ㅂ 하지만, 지금은 시험 기간도 아닌데…?',
		'ㅇ 시험 기간이지. 기말고사까지 3주밖에 안 남았잖아.',
		'ㅂ ……그러니까, 3주나 남았잖아…?',
		'ㅇ ……',
		'ㅇ 하여간, 난 요즘 잠까지 줄여가면서 공부하고 있어. 책 읽을 시간에 잠을 더 자고 말지.',
		{
			'Choice': {
				'1': {
					'Text': '하루에 몇 시간이나 자는데?',
					'Do': 'ㅇ 글쎄. 오늘은 네 시간쯤 잤나….'
				},
				'2': {
					'Text': '밤에 몇 시에 자는데?',
					'Do': 'ㅇ 글쎄. 어제는 새벽 세 시쯤 잤나….'
				}
			}
		},
		'ㅂ 정말로?! 안 졸려? 글자가 눈에 들어오긴 해…?',
		'ㅇ ……조금.           그래도 익숙해지면 할만 해.',
		{
			'Choice': {
				'1': {
					'Text': '정말 열심히 공부하는구나. 멋지다!',
					'Do': 'ㅇ ……그냥 할 수 있는 만큼 하는 것뿐이야.'
				},
				'2': {
					'Text': '그래도 잠을 지나치게 줄이는 건 건강에 안 좋을 텐데….',
					'Do': 'ㅇ ……어쩔 수 없지. 시험 기간 아닐 때에는 적당히 자고 있어.'
				},
			}
		},
		'ㅇ 좀 힘들긴 해도, 남들 자는 시간까지 끌어모아서 노력해야 그만큼 좋은 결과가 나올 테니까.',
		'ㅇ 이왕 노력하는 거 제대로 결과가 나와야 더 뿌듯하잖아.',
		'ㅂ 그래도…….',
		'ㅇ ……                얘기 끝났으면 이만 가 줄래?',
		'ㅂ 아, 알겠어. 나중에 보자.',
		'hide character ㅇ',
		'ㅂ ……',
		'ㅂ 역시 좀 걱정되지 않아…?         하지만 공부를 위해서라는데, 뭐라 하기도 좀 그렇고…….',
		'ㅂ ……         일단 다른 친구들한테 설문을 계속 받아 볼까?',
		function() { monogatari.storage().ㅋ5 += 1 },
		'jump 1서서관2'
	],

	'5-2': [
		'ㅇ 하암…….',
		'jump 1서서관2',
	],

	't14': [ //류펭귄
		'jump 1서서관2',
		'ㄹ 토끼 안녕! 도서관에서는 처음 보는 것 같네.',
		'ㅂ 당연하지. 그야 난 오늘 처음 온 거거든!',
		'ㄹ 정말? 도서관 입성을 환영해! 음… 그런데, 거기 있는 친구는?',
		'ㅂ 이 친구는 {{이름}}{{이}}라고 해! 내 사회 수행평가를 도와주고 있어. <br> {{이름}}{{아}}, 여긴 내 친구 펭귄이야.',
		'ㄹ {{이름}}{{이}}구나. 만나서 반가워! <br> 사회 수행평가라면… 독서 동기를 조사하고 있구나?',
		'ㄹ 재미있는 주제같아 보여서 나도 하고 싶었는데. 나 책 무―지 좋아하거든!',
		{
			'Choice': {
				'1': {
					'Text': '나도 그래!',
					'Do': 'ㄹ 정말? 요즘 세상에 보기 힘든 친구네!'
				},
				'2': {
					'Text': '어떻게 그럴 수가 있어…?',
					'Do': 'ㄹ 아하하하! 안 그래도 그런 얘기 많이 들어!'
				}
			}
		},
		'ㅂ 우와……. 왜 책을 좋아해?',
		'ㄹ 책을 읽으면 내가 잘 몰랐던 내용에 대해 자세히 알 수 있게 되잖아. 내가 놓치고 살아갈 뻔했던 재미있는 얘기를 잔뜩 알 수 있는 거지!',
		'ㄹ 잘 몰랐던 친구랑 이야기를 나눠 보면 즐겁잖아? 책을 읽는 것도 비슷하다고 생각해.',
		'ㅂ 미안…. 나 I라서 친구 사귀는 즐거움에 비유해 줘봤자 잘 모르겠어…….',
		'ㄹ 아하하하, 그럴 수 있지!',
		'ㅂ 넌 도서관에 자주 와?',
		'ㄹ 응! 난 책을 읽는 것뿐만 아니라 책을 뒤적거리는 것도 좋아하거든. <br> …내가 도서부라서, 일하러 와야 하기도 하고!',
		{
			'Choice': {
				'1': {
					'Text': '책을 뒤적거린다니?',
					'Do': 'jump 6-1-1'
				},
				'2': {
					'Text': '도서부는 왜 들게 됐어?',
					'Do': 'jump 6-1-2'
				},
			}
		},
	],

	'6-1-1': [
		'ㄹ 책은 말야, 표지만 보고는 안에 무슨 내용이 들었는지 다 알 수 없잖아. 도서부 일을 하면서 책을 정리하다 보면, 가끔 무슨 내용을 담고 있을까 궁금해지게 만드는 표지들이 있거든?',
		'ㄹ 그런 책들을 그런 책을 마구 펼쳐서 훑어보는 게 내 취미야. <span style="font-size:0.9em !important;"> 은근슬쩍 일 안 하고 땡땡이칠 수도 있고…. </span> <br> 도서관에서는 몇 권을 펼쳐 봐도 공짜라서 좋단 말이지.',
		{
			'Choice': {
				'1': {
					'Text': '재밌겠다!',
					'Do': 'ㄹ 그치, 그치! 음…           예를 들어….'
				},
				'2': {
					'Text': '잘 모르겠는데….',
					'Do': 'ㄹ 아하하, 그런가?           그럼,          어디보자….'
				},
			}
		},
		'show image ㅊ펭귄이날개로날수있다면',
		'ㄹ 이 책 본 적 있어? 저기 벽에 걸려 있는 이번 주 추천 도서 중에 하나인데.',
		'ㅂ 완전 처음 듣는데……. 뭐에 관한 책이야?',
		'hide image ㅊ펭귄이날개로날수있다면',
		'ㄹ 글쎄…. 무슨 책일까? {{이름}}{{이}} 네 생각엔, 『펭귄이 날개로 날 수 있다면』이 뭐에 관한 책일 것 같아?',
		{
			'Choice': {
				'1': {
					'Text': '날 수 있는 펭귄을 주인공으로 한 소설?',
					'Do': 'ㅂ 그럴싸한데! 재밌겠다.'
				},
				'2': {
					'Text': '동물의 진화와 퇴화를 설명하는 책?',
					'Do': 'ㅂ 조금 어려워 보이는데…….'
				},
				'3': {
					'Text': '펭귄이 얼마나 강한지에 관한 책?',
					'Do': 'ㅂ 음…. 재미있어 보이긴 하네.'
				}
			}
		},
		'ㅂ 그래서, 뭐에 관한 책이야?',
		'ㄹ 글쎄……. 네가 가서 한번 읽어 봐!',
		'ㅂ 엑…. 저 두꺼워 보이는 책을 전부 읽어 보라고?',
		'ㄹ 뭐? 아니야!',
		'ㄹ 책의 뒤표지나 목차를 보는 것만으로도 무슨 내용인지 대략은 알 수 있거든.',
		'ㅂ 목차라……! {{이름}}{{아}}, 같이 저 책 한번 살펴보고 올까?',
		function() { monogatari.storage().ㅋ6 += 1 },



	],

	't14-1': [ //류펭귄 퀘완료후

	],

	't15': [ //최 양

	],

	't15-1': [ //최 양 퀘완료후

	],

	't16': [ //남 곰
		'jump 1동서관2'
	],

	't16-1': [ //남 곰 퀘완료후

	],

	't17': [ //김고양&정원숭
		'jump 1동서관2'
	],


	/* ================================
	각종 틀
	================================ */

	'조사맵 틀': [
		'show scene 맵이미지',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				'01': {
					'Text': '',
					'Do': 'jump ',
					'Class': '요소1',
				},
				'02': {
					'Text': '',
					'Do': 'jump ',
					'Class': '요소2',
				},
				'03': {
					'Text': '',
					'Do': 'jump ',
					'Class': '요소3',
				},
			}
		}
	],


	//============================

});