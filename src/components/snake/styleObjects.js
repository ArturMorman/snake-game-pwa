

const startButton = {
  position: 'absolute',
  bottom: '100px',
  left: 'calc(50vw - 100px)',
  zIndex: '100',

  outline: 'none',
  border: 'none',
  backgroundColor: 'gold',
  color: 'hotpink',
  borderRadius: '6px',

  padding: '12px 16px',
  fontSize: '18px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  cursor: 'pointer'
}

const gameOverPop = {
  color: 'hotpink',
  fontSize: '28px',
  fontWeight: '700',
  letterSpacing: '3px',

  position: 'absolute',
  top: 'calc(50% - 33px)',
  left: 'calc(50% - 233px)'
}


export {
  startButton,
  gameOverPop
}