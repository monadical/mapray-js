import triangulator_tests from "./triangulator_tests";
import convexpolygon_tests from "./convexpolygon_tests";


function
mapray_tests()
{
    console.log( "mapray tests" );

    triangulator_tests();
    convexpolygon_tests();
}


window.mapray_tests = mapray_tests;