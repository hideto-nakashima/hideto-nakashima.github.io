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
NotebookDataLength[      5382,        152]
NotebookOptionsPosition[      5959,        148]
NotebookOutlinePosition[      6315,        164]
CellTagsIndexPosition[      6272,        161]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell[BoxData[
 RowBox[{"Manipulate", "[", 
  RowBox[{
   RowBox[{
    RowBox[{
     RowBox[{"taylorSin", "[", 
      RowBox[{"x_", ",", "0"}], "]"}], ":=", "x"}], ";", 
    "\[IndentingNewLine]", 
    RowBox[{
     RowBox[{"taylorSin", "[", 
      RowBox[{"x_", ",", "k_"}], "]"}], ":=", 
     RowBox[{
      RowBox[{"taylorSin", "[", 
       RowBox[{"x", ",", "k"}], "]"}], "=", "\[IndentingNewLine]", 
      RowBox[{
       RowBox[{"taylorSin", "[", 
        RowBox[{"x", ",", 
         RowBox[{"k", "-", "1"}]}], "]"}], "+", 
       RowBox[{
        RowBox[{
         RowBox[{"(", 
          RowBox[{"-", "1"}], ")"}], "^", "k"}], "*", 
        RowBox[{
         RowBox[{"x", "^", 
          RowBox[{"(", 
           RowBox[{
            RowBox[{"2", "*", "k"}], "+", "1"}], ")"}]}], "/", 
         RowBox[{"Factorial", "[", 
          RowBox[{
           RowBox[{"2", "*", "k"}], "+", "1"}], "]"}]}]}]}]}]}], ";", 
    RowBox[{"Plot", "[", 
     RowBox[{
      RowBox[{"{", 
       RowBox[{
        RowBox[{"taylorSin", "[", 
         RowBox[{"x", ",", "n"}], "]"}], ",", 
        RowBox[{"Sin", "[", "x", "]"}]}], "}"}], ",", 
      RowBox[{"{", 
       RowBox[{"x", ",", 
        RowBox[{
         RowBox[{"-", "15"}], "*", "Pi"}], ",", 
        RowBox[{"15", "*", "Pi"}]}], "}"}], ",", "\[IndentingNewLine]", 
      RowBox[{"PlotRange", "\[Rule]", 
       RowBox[{"{", 
        RowBox[{
         RowBox[{"{", 
          RowBox[{
           RowBox[{"-", "30"}], ",", "30"}], "}"}], ",", 
         RowBox[{"{", 
          RowBox[{
           RowBox[{"-", "5"}], ",", "5"}], "}"}]}], "}"}]}], ",", 
      "\[IndentingNewLine]", 
      RowBox[{"AspectRatio", "\[Rule]", 
       RowBox[{"1", "/", "6"}]}], ",", "\[IndentingNewLine]", 
      RowBox[{"Frame", "\[Rule]", "True"}], ",", "\[IndentingNewLine]", 
      RowBox[{"PlotStyle", "\[Rule]", 
       RowBox[{"{", 
        RowBox[{
         RowBox[{"AbsoluteThickness", "[", "0.5", "]"}], ",", "Dotted"}], 
        "}"}]}], ",", "\[IndentingNewLine]", 
      RowBox[{"ImageSize", "->", "Full"}]}], "]"}]}], ",", 
   RowBox[{"{", 
    RowBox[{"n", ",", "0", ",", "35", ",", "1"}], "}"}]}], "]"}]], "Input"],

Cell[BoxData[
 TagBox[
  StyleBox[
   DynamicModuleBox[{$CellContext`n$$ = 0, Typeset`show$$ = True, 
    Typeset`bookmarkList$$ = {}, Typeset`bookmarkMode$$ = "Menu", 
    Typeset`animator$$, Typeset`animvar$$ = 1, Typeset`name$$ = 
    "\"\:540d\:79f0\:672a\:5b9a\:7fa9\"", Typeset`specs$$ = {{
      Hold[$CellContext`n$$], 0, 35, 1}}, Typeset`size$$ = {740., {66., 71.}},
     Typeset`update$$ = 0, Typeset`initDone$$, Typeset`skipInitDone$$ = 
    True, $CellContext`n$8265$$ = 0}, 
    DynamicBox[Manipulate`ManipulateBoxes[
     1, StandardForm, "Variables" :> {$CellContext`n$$ = 0}, 
      "ControllerVariables" :> {
        Hold[$CellContext`n$$, $CellContext`n$8265$$, 0]}, 
      "OtherVariables" :> {
       Typeset`show$$, Typeset`bookmarkList$$, Typeset`bookmarkMode$$, 
        Typeset`animator$$, Typeset`animvar$$, Typeset`name$$, 
        Typeset`specs$$, Typeset`size$$, Typeset`update$$, Typeset`initDone$$,
         Typeset`skipInitDone$$}, "Body" :> ($CellContext`taylorSin[
          Pattern[$CellContext`x, 
           Blank[]], 0] := $CellContext`x; $CellContext`taylorSin[
          Pattern[$CellContext`x, 
           Blank[]], 
          Pattern[$CellContext`k, 
           
           Blank[]]] := ($CellContext`taylorSin[$CellContext`x, \
$CellContext`k] = $CellContext`taylorSin[$CellContext`x, $CellContext`k - 
            1] + (-1)^$CellContext`k ($CellContext`x^(2 $CellContext`k + 1)/
            Factorial[2 $CellContext`k + 1])); Plot[{
          $CellContext`taylorSin[$CellContext`x, $CellContext`n$$], 
          Sin[$CellContext`x]}, {$CellContext`x, (-15) Pi, 15 Pi}, 
         PlotRange -> {{-30, 30}, {-5, 5}}, AspectRatio -> 1/6, Frame -> True,
          PlotStyle -> {
           AbsoluteThickness[0.5], Dotted}, ImageSize -> Full]), 
      "Specifications" :> {{$CellContext`n$$, 0, 35, 1}}, "Options" :> {}, 
      "DefaultOptions" :> {}],
     ImageSizeCache->{791., {112., 119.}},
     SingleEvaluation->True],
    Deinitialization:>None,
    DynamicModuleValues:>{},
    SynchronousInitialization->True,
    UnsavedVariables:>{Typeset`initDone$$},
    UntrackedVariables:>{Typeset`size$$}], "Manipulate",
   Deployed->True,
   StripOnInput->False],
  Manipulate`InterpretManipulate[1]]], "Output",
 CellChangeTimes->{3.7051228226224337`*^9}]
}, Open  ]]
},
WindowSize->{913, 1021},
WindowMargins->{{Automatic, -25}, {Automatic, 0}},
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
Cell[1486, 35, 2160, 62, 192, "Input"],
Cell[3649, 99, 2294, 46, 281, "Output"]
}, Open  ]]
}
]
*)

(* End of internal cache information *)

(* NotebookSignature rwDU4YThCql@AAKJxuApFt7P *)
