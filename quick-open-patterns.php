<?php
/**
 * Plugin Name:       Quick Open Patterns
 * Description:       Opens the patterns modal when you type /patterns
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Kevin Batdorf
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       quick-open-patterns
 * Update URI: 		  false
 *
 * @package           kevinbatdorf
 */

add_action('init', function () {
    register_block_type(__DIR__ . '/build');
});
