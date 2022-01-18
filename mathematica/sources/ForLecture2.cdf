(* Content-type: application/vnd.wolfram.cdf.text *)

(*** Wolfram CDF File ***)
(* http://www.wolfram.com/cdf *)

(* CreatedBy='Mathematica 10.0' *)

(*************************************************************************)
(*                                                                       *)
(*  The Mathematica License under which this file was created prohibits  *)
(*  restricting third parties in receipt of this file from republishing  *)
(*  or redistributing it by any means, including but not limited to      *)
(*  rights management or terms of use, without the express consent of    *)
(*  Wolfram Research, Inc. For additional information concerning CDF     *)
(*  licensing and redistribution see:                                    *)
(*                                                                       *)
(*        www.wolfram.com/cdf/adopting-cdf/licensing-options.html        *)
(*                                                                       *)
(*************************************************************************)

(*CacheID: 234*)
(* Internal cache information:
NotebookFileLineBreakTest
NotebookFileLineBreakTest
NotebookDataPosition[      1064,         20]
NotebookDataLength[      6394,        179]
NotebookOptionsPosition[      6970,        175]
NotebookOutlinePosition[      7326,        191]
CellTagsIndexPosition[      7283,        188]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell[BoxData[
 RowBox[{"Manipulate", "[", "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{
     RowBox[{"talorLog", "[", "x_", "]"}], ":=", 
     RowBox[{"Table", "[", 
      RowBox[{
       RowBox[{
        RowBox[{
         RowBox[{"(", 
          RowBox[{"-", "1"}], ")"}], "^", 
         RowBox[{"(", 
          RowBox[{"m", "-", "1"}], ")"}]}], " ", 
        RowBox[{
         RowBox[{
          RowBox[{"(", "x", ")"}], "^", 
          RowBox[{"(", "m", ")"}]}], "/", "m"}]}], ",", 
       RowBox[{"{", 
        RowBox[{"m", ",", "1", ",", "20"}], "}"}]}], "]"}]}], ";", 
    "\[IndentingNewLine]", 
    RowBox[{
     RowBox[{"log", "[", 
      RowBox[{"n_", ",", "x_"}], "]"}], ":=", 
     RowBox[{"(", 
      RowBox[{
       RowBox[{"temp", "=", "0"}], ";", "\[IndentingNewLine]", 
       RowBox[{"For", "[", 
        RowBox[{
         RowBox[{"i", "=", "0"}], ",", 
         RowBox[{"i", "<", " ", "n"}], ",", 
         RowBox[{"i", "++"}], ",", "\[IndentingNewLine]", 
         RowBox[{"temp", "=", 
          RowBox[{"temp", "+", 
           RowBox[{"N", "[", 
            RowBox[{
             RowBox[{
              RowBox[{"talorLog", "[", "x", "]"}], "[", 
              RowBox[{"[", 
               RowBox[{"i", "+", "1"}], "]"}], "]"}], ",", "5"}], "]"}]}]}]}],
         "]"}], ";", "temp"}], ")"}]}], ";", "\[IndentingNewLine]", 
    RowBox[{"Plot", "[", 
     RowBox[{
      RowBox[{"{", 
       RowBox[{
        RowBox[{"log", "[", 
         RowBox[{"n", ",", 
          RowBox[{"x", "-", "1"}]}], "]"}], ",", 
        RowBox[{"Log", "[", "x", "]"}]}], "}"}], ",", 
      RowBox[{"{", 
       RowBox[{"x", ",", 
        RowBox[{"-", "20"}], ",", "20"}], "}"}], ",", "\[IndentingNewLine]", 
      RowBox[{"PlotRange", "\[Rule]", 
       RowBox[{"{", 
        RowBox[{
         RowBox[{"{", 
          RowBox[{
           RowBox[{"-", "1"}], ",", "7"}], "}"}], ",", 
         RowBox[{"{", 
          RowBox[{
           RowBox[{"-", "2.5"}], ",", "2"}], "}"}]}], "}"}]}], ",", 
      "\[IndentingNewLine]", 
      RowBox[{"GridLines", "\[Rule]", 
       RowBox[{"{", 
        RowBox[{
         RowBox[{"{", "2", "}"}], ",", 
         RowBox[{"{", "}"}]}], "}"}]}], ",", "\[IndentingNewLine]", 
      RowBox[{"AspectRatio", "\[Rule]", 
       RowBox[{"9", "/", "16"}]}], ",", "\[IndentingNewLine]", 
      RowBox[{"Frame", "\[Rule]", "True"}], ",", "\[IndentingNewLine]", 
      RowBox[{"PlotStyle", "\[Rule]", 
       RowBox[{"{", 
        RowBox[{
         RowBox[{"AbsoluteThickness", "[", "2.5", "]"}], ",", 
         RowBox[{"{", 
          RowBox[{
           RowBox[{"AbsoluteThickness", "[", "3.5", "]"}], ",", "Dotted"}], 
          "}"}]}], "}"}]}], ",", "\[IndentingNewLine]", 
      RowBox[{"ImageSize", "\[Rule]", "Full"}]}], "\[IndentingNewLine]", 
     "]"}]}], ",", 
   RowBox[{"{", 
    RowBox[{"n", ",", "0", ",", "19", ",", "1"}], "}"}]}], 
  "\[IndentingNewLine]", "]"}]], "Input"],

Cell[BoxData[
 TagBox[
  StyleBox[
   DynamicModuleBox[{$CellContext`n$$ = 0, Typeset`show$$ = True, 
    Typeset`bookmarkList$$ = {}, Typeset`bookmarkMode$$ = "Menu", 
    Typeset`animator$$, Typeset`animvar$$ = 1, Typeset`name$$ = 
    "\"\:540d\:79f0\:672a\:5b9a\:7fa9\"", Typeset`specs$$ = {{
      Hold[$CellContext`n$$], 0, 19, 1}}, Typeset`size$$ = {
    740., {213., 217.}}, Typeset`update$$ = 0, Typeset`initDone$$, 
    Typeset`skipInitDone$$ = True, $CellContext`n$42069$$ = 0}, 
    DynamicBox[Manipulate`ManipulateBoxes[
     1, StandardForm, "Variables" :> {$CellContext`n$$ = 0}, 
      "ControllerVariables" :> {
        Hold[$CellContext`n$$, $CellContext`n$42069$$, 0]}, 
      "OtherVariables" :> {
       Typeset`show$$, Typeset`bookmarkList$$, Typeset`bookmarkMode$$, 
        Typeset`animator$$, Typeset`animvar$$, Typeset`name$$, 
        Typeset`specs$$, Typeset`size$$, Typeset`update$$, Typeset`initDone$$,
         Typeset`skipInitDone$$}, "Body" :> ($CellContext`talorLog[
          Pattern[$CellContext`x, 
           Blank[]]] := 
        Table[(-1)^($CellContext`m - 
            1) ($CellContext`x^$CellContext`m/$CellContext`m), \
{$CellContext`m, 1, 20}]; $CellContext`log[
          Pattern[$CellContext`n, 
           Blank[]], 
          Pattern[$CellContext`x, 
           Blank[]]] := ($CellContext`temp = 0; 
         For[$CellContext`i = 0, $CellContext`i < $CellContext`n, 
           
           Increment[$CellContext`i], $CellContext`temp = $CellContext`temp + 
            N[
              Part[
               $CellContext`talorLog[$CellContext`x], $CellContext`i + 1], 
              5]]; $CellContext`temp); Plot[{
          $CellContext`log[$CellContext`n$$, $CellContext`x - 1], 
          Log[$CellContext`x]}, {$CellContext`x, -20, 20}, 
         PlotRange -> {{-1, 7}, {-2.5, 2}}, GridLines -> {{2}, {}}, 
         AspectRatio -> 9/16, Frame -> True, PlotStyle -> {
           AbsoluteThickness[2.5], {
            AbsoluteThickness[3.5], Dotted}}, ImageSize -> Full]), 
      "Specifications" :> {{$CellContext`n$$, 0, 19, 1}}, "Options" :> {}, 
      "DefaultOptions" :> {}],
     ImageSizeCache->{791., {258., 265.}},
     SingleEvaluation->True],
    Deinitialization:>None,
    DynamicModuleValues:>{},
    SynchronousInitialization->True,
    UnsavedVariables:>{Typeset`initDone$$},
    UntrackedVariables:>{Typeset`size$$}], "Manipulate",
   Deployed->True,
   StripOnInput->False],
  Manipulate`InterpretManipulate[1]]], "Output",
 CellChangeTimes->{3.7056981910545297`*^9}]
}, Open  ]]
},
WindowSize->{913, 1021},
WindowMargins->{{Automatic, -47}, {Automatic, 0}},
FrontEndVersion->"10.0 for Microsoft Windows (64-bit) (2014\:5e747\:67089\
\:65e5)",
StyleDefinitions->"Default.nb"
]
(* End of Notebook Content *)

(* Internal cache information *)
(*CellTagsOutline
CellTagsIndex->{}
*)
(*CellTagsIndex
CellTagsIndex->{}
*)
(*NotebookFileOutline
Notebook[{
Cell[CellGroupData[{
Cell[1486, 35, 2929, 82, 292, "Input"],
Cell[4418, 119, 2536, 53, 573, "Output"]
}, Open  ]]
}
]
*)

(* End of internal cache information *)

(* NotebookSignature KwpUEI28GXjliBK36VyvvmjG *)
