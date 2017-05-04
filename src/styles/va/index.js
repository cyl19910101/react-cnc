import style from './va.css';
import { genAbFP, iterateStyle } from '../../script_generator';
iterateStyle ( style, genAbFP ( __filename ) );