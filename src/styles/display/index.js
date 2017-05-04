import style from './display.css';
import { genAbFP, iterateStyle } from '../../script_generator';
iterateStyle ( style, genAbFP ( __filename ) );
