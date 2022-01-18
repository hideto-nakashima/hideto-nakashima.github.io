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
NotebookDataLength[      4478,        130]
NotebookOptionsPosition[      5056,        126]
NotebookOutlinePosition[      5412,        142]
CellTagsIndexPosition[      5369,        139]
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
       RowBox[{"x", "/", "s"}], "<", "1"}], " ", "&&", " ", 
      RowBox[{"0", "<", 
       RowBox[{"y", "/", "t"}], "<", "1"}]}], ",", 
     RowBox[{"{", 
      RowBox[{"x", ",", 
       RowBox[{"-", "2.1"}], ",", "2.1"}], "}"}], ",", 
     RowBox[{"{", 
      RowBox[{"y", ",", 
       RowBox[{"-", "2.1"}], ",", "2.1"}], "}"}], ",", 
     RowBox[{"AspectRatio", "\[Rule]", "1"}], ",", 
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
          RowBox[{"\"\<s\>\"", ",", "0"}], "}"}], ",", 
         RowBox[{"{", 
          RowBox[{"0", ",", "\"\<t\>\""}], "}"}]}], "}"}], "]"}]}]}], "]"}], 
   ",", 
   RowBox[{"{", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{"s", ",", "1"}], "}"}], ",", 
     RowBox[{"-", "2"}], ",", "2"}], "}"}], ",", 
   RowBox[{"{", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{"t", ",", "1"}], "}"}], ",", 
     RowBox[{"-", "2"}], ",", "2"}], "}"}]}], "]"}]], "Input"],

Cell[BoxData[
 TagBox[
  StyleBox[
   DynamicModuleBox[{$CellContext`s$$ = 1, $CellContext`t$$ = 1, 
    Typeset`show$$ = True, Typeset`bookmarkList$$ = {}, 
    Typeset`bookmarkMode$$ = "Menu", Typeset`animator$$, Typeset`animvar$$ = 
    1, Typeset`name$$ = "\"\:540d\:79f0\:672a\:5b9a\:7fa9\"", 
    Typeset`specs$$ = {{{
       Hold[$CellContext`s$$], 1}, -2, 2}, {{
       Hold[$CellContext`t$$], 1}, -2, 2}}, Typeset`size$$ = {
    360., {195., 199.}}, Typeset`update$$ = 0, Typeset`initDone$$, 
    Typeset`skipInitDone$$ = True, $CellContext`s$24039$$ = 
    0, $CellContext`t$24040$$ = 0}, 
    DynamicBox[Manipulate`ManipulateBoxes[
     1, StandardForm, 
      "Variables" :> {$CellContext`s$$ = 1, $CellContext`t$$ = 1}, 
      "ControllerVariables" :> {
        Hold[$CellContext`s$$, $CellContext`s$24039$$, 0], 
        Hold[$CellContext`t$$, $CellContext`t$24040$$, 0]}, 
      "OtherVariables" :> {
       Typeset`show$$, Typeset`bookmarkList$$, Typeset`bookmarkMode$$, 
        Typeset`animator$$, Typeset`animvar$$, Typeset`name$$, 
        Typeset`specs$$, Typeset`size$$, Typeset`update$$, Typeset`initDone$$,
         Typeset`skipInitDone$$}, "Body" :> RegionPlot[
        And[
        0 < $CellContext`x/$CellContext`s$$ < 1, 
         0 < $CellContext`y/$CellContext`t$$ < 1], {$CellContext`x, -2.1, 
         2.1}, {$CellContext`y, -2.1, 2.1}, AspectRatio -> 1, Axes -> True, 
        AxesLabel -> {$CellContext`x, $CellContext`y}, AxesOrigin -> {0, 0}, 
        Frame -> False, PlotLabel -> MatrixForm[{{"s", 0}, {0, "t"}}]], 
      "Specifications" :> {{{$CellContext`s$$, 1}, -2, 
         2}, {{$CellContext`t$$, 1}, -2, 2}}, "Options" :> {}, 
      "DefaultOptions" :> {}],
     ImageSizeCache->{411., {254., 261.}},
     SingleEvaluation->True],
    Deinitialization:>None,
    DynamicModuleValues:>{},
    SynchronousInitialization->True,
    UnsavedVariables:>{Typeset`initDone$$},
    UntrackedVariables:>{Typeset`size$$}], "Manipulate",
   Deployed->True,
   StripOnInput->False],
  Manipulate`InterpretManipulate[1]]], "Output",
 CellChangeTimes->{3.6711717993837166`*^9}]
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
Cell[1486, 35, 1443, 43, 72, "Input"],
Cell[2932, 80, 2108, 43, 565, "Output"]
}, Open  ]]
}
]
*)

(* End of internal cache information *)

(* NotebookSignature MuDJhSsEikfagCgL92m5xAyv *)
