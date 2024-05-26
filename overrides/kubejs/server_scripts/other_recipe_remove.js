// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => {
	// output
	event.remove({ output: 'everycomp:c/bloomingnature/larch_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/baobab_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/swamp_oak_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/aspen_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/fan_palm_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/fir_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/swamp_cypress_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/pine_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/chestnut_window_pane' })
	event.remove({ output: 'everycomp:c/bloomingnature/ebony_window_pane' })

  console.log('Hello! The recipe event has fired!')
})
