// https://www.blockbench.net/wiki/api/index

(function() {
    var button;

    Plugin.register('height_randomizer', {
        title: 'Height Randomizer',
        author: 'Yourname',
        description: 'This plugin can randomize the height of all selected cubes',
        icon: 'bar_chart',
        version: '0.0.1',
        variant: 'both',
        onload() {
            button = new Action('randomize_height', {
                name: 'Randomize Height',
                description: 'Randomize the height of all selected elements',
                icon: 'bar_chart',
                click: function() {
                    Undo.initEdit({elements: Cube.selected});
                    Cube.selected.forEach(cube => {
                        cube.to[1] = cube.from[0] + Math.floor(Math.random()*8);
                    });
                    Undo.finishEdit('randomize cube height');
                }
            });
            MenuBar.addAction(button, 'filter');
        },
        onunload() {
            button.delete();
        }
    });

})();