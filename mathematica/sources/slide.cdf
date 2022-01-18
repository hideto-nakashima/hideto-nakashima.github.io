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
NotebookDataLength[      4102,        119]
NotebookOptionsPosition[      4680,        115]
NotebookOutlinePosition[      5036,        131]
CellTagsIndexPosition[      4993,        128]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell[BoxData[
 RowBox[{"Manipulate", "[", 
  RowBox[{
   RowBox[{"RegionPlot", "[", 
    RowBox[{
     RowBox[{
      RowBox[{"0", "<", 
       RowBox[{"x", "-", 
        RowBox[{"t", " ", "y"}]}], "<", "1"}], " ", "&&", " ", 
      RowBox[{"0", "<", "y", "<", "1"}]}], ",", 
     RowBox[{"{", 
      RowBox[{"x", ",", 
       RowBox[{"-", "1"}], ",", "2"}], "}"}], ",", 
     RowBox[{"{", 
      RowBox[{"y", ",", 
       RowBox[{"-", "0.5"}], ",", "1"}], "}"}], ",", 
     RowBox[{"AspectRatio", "\[Rule]", 
      RowBox[{"1", "/", "2"}]}], ",", 
     RowBox[{"Axes", "\[Rule]", "True"}], ",", " ", 
     RowBox[{"AxesLabel", "\[Rule]", 
      RowBox[{"{", 
       RowBox[{"x", ",", "y"}], "}"}]}], ",", 
     RowBox[{"AxesOrigin", "\[Rule]", 
      RowBox[{"{", 
       RowBox[{"0", ",", "0"}], "}"}]}], ",", " ", 
     RowBox[{"Frame", "\[Rule]", "False"}], ",", 
     RowBox[{"PlotLabel", "\[Rule]", 
      RowBox[{"MatrixForm", "[", 
       RowBox[{"{", 
        RowBox[{
         RowBox[{"{", 
          RowBox[{"1", ",", "\"\<t\>\""}], "}"}], ",", 
         RowBox[{"{", 
          RowBox[{"0", ",", "1"}], "}"}]}], "}"}], "]"}]}]}], "]"}], ",", 
   RowBox[{"{", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{"t", ",", "0"}], "}"}], ",", 
     RowBox[{"-", "1"}], ",", "1"}], "}"}]}], "]"}]], "Input"],

Cell[BoxData[
 TagBox[
  StyleBox[
   DynamicModuleBox[{$CellContext`t$$ = 0, Typeset`show$$ = True, 
    Typeset`bookmarkList$$ = {}, Typeset`bookmarkMode$$ = "Menu", 
    Typeset`animator$$, Typeset`animvar$$ = 1, Typeset`name$$ = 
    "\"\:540d\:79f0\:672a\:5b9a\:7fa9\"", Typeset`specs$$ = {{{
       Hold[$CellContext`t$$], 0}, -1, 1}}, Typeset`size$$ = {
    360., {108., 112.}}, Typeset`update$$ = 0, Typeset`initDone$$, 
    Typeset`skipInitDone$$ = True, $CellContext`t$13723$$ = 0}, 
    DynamicBox[Manipulate`ManipulateBoxes[
     1, StandardForm, "Variables" :> {$CellContext`t$$ = 0}, 
      "ControllerVariables" :> {
        Hold[$CellContext`t$$, $CellContext`t$13723$$, 0]}, 
      "OtherVariables" :> {
       Typeset`show$$, Typeset`bookmarkList$$, Typeset`bookmarkMode$$, 
        Typeset`animator$$, Typeset`animvar$$, Typeset`name$$, 
        Typeset`specs$$, Typeset`size$$, Typeset`update$$, Typeset`initDone$$,
         Typeset`skipInitDone$$}, "Body" :> RegionPlot[
        And[
        0 < $CellContext`x - $CellContext`t$$ $CellContext`y < 1, 
         0 < $CellContext`y < 1], {$CellContext`x, -1, 
         2}, {$CellContext`y, -0.5, 1}, AspectRatio -> 1/2, Axes -> True, 
        AxesLabel -> {$CellContext`x, $CellContext`y}, AxesOrigin -> {0, 0}, 
        Frame -> False, PlotLabel -> MatrixForm[{{1, "t"}, {0, 1}}]], 
      "Specifications" :> {{{$CellContext`t$$, 0}, -1, 1}}, "Options" :> {}, 
      "DefaultOptions" :> {}],
     ImageSizeCache->{411., {153., 160.}},
     SingleEvaluation->True],
    Deinitialization:>None,
    DynamicModuleValues:>{},
    SynchronousInitialization->True,
    UnsavedVariables:>{Typeset`initDone$$},
    UntrackedVariables:>{Typeset`size$$}], "Manipulate",
   Deployed->True,
   StripOnInput->False],
  Manipulate`InterpretManipulate[1]]], "Output",
 CellChangeTimes->{3.6711716854693923`*^9}]
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
Cell[1486, 35, 1310, 38, 72, "Input"],
Cell[2799, 75, 1865, 37, 330, "Output"]
}, Open  ]]
}
]
*)

(* End of internal cache information *)

(* NotebookSignature YvTwunlA7pob@DwF8nq9TG6J *)
