new TypeIt("#title", {
    speed: 100,
    waitUntilVisible: true,
})
    .type("다채로움 즐거움으로", { delay: 300 })
    .move(-6)
    .delete(1)
    .type("운")
    .move(null, { to: "END" })
    .break({ delay: 500 })
    .type("액션 MMO의 <mark>새 지평을 열다 </mark>")
    .move(null, { to: "END" })
    .pause(600)
    // .break({ delay: 500 })
    .go();