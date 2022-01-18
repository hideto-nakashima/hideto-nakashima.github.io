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
NotebookDataLength[      4057,        119]
NotebookOptionsPosition[      4635,        115]
NotebookOutlinePosition[      4991,        131]
CellTagsIndexPosition[      4948,        128]
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
      RowBox[{"0", "<", "x", "<", "1"}], " ", "&&", " ", 
      RowBox[{"0", "<", 
       RowBox[{"y", "/", "t"}], "<", "1"}]}], ",", 
     RowBox[{"{", 
      RowBox[{"x", ",", 
       RowBox[{"-", "1"}], ",", "2"}], "}"}], ",", 
     RowBox[{"{", 
      RowBox[{"y", ",", 
       RowBox[{"-", "1"}], ",", "1"}], "}"}], ",", 
     RowBox[{"AspectRatio", "\[Rule]", 
      RowBox[{"2", "/", "3"}]}], ",", 
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
          RowBox[{"1", ",", "0"}], "}"}], ",", 
         RowBox[{"{", 
          RowBox[{"0", ",", "\"\<t\>\""}], "}"}]}], "}"}], "]"}]}]}], "]"}], 
   ",", 
   RowBox[{"{", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{"t", ",", "1"}], "}"}], ",", 
     RowBox[{"-", "1"}], ",", "1"}], "}"}]}], "]"}]], "Input"],

Cell[BoxData[
 TagBox[
  StyleBox[
   DynamicModuleBox[{$CellContext`t$$ = -0.99, Typeset`show$$ = True, 
    Typeset`bookmarkList$$ = {}, Typeset`bookmarkMode$$ = "Menu", 
    Typeset`animator$$, Typeset`animvar$$ = 1, Typeset`name$$ = 
    "\"\:540d\:79f0\:672a\:5b9a\:7fa9\"", Typeset`specs$$ = {{{
       Hold[$CellContext`t$$], 1}, -1, 1}}, Typeset`size$$ = {
    360., {137., 141.}}, Typeset`update$$ = 0, Typeset`initDone$$, 
    Typeset`skipInitDone$$ = True, $CellContext`t$21055$$ = 0}, 
    DynamicBox[Manipulate`ManipulateBoxes[
     1, StandardForm, "Variables" :> {$CellContext`t$$ = 1}, 
      "ControllerVariables" :> {
        Hold[$CellContext`t$$, $CellContext`t$21055$$, 0]}, 
      "OtherVariables" :> {
       Typeset`show$$, Typeset`bookmarkList$$, Typeset`bookmarkMode$$, 
        Typeset`animator$$, Typeset`animvar$$, Typeset`name$$, 
        Typeset`specs$$, Typeset`size$$, Typeset`update$$, Typeset`initDone$$,
         Typeset`skipInitDone$$}, "Body" :> RegionPlot[
        And[
        0 < $CellContext`x < 1, 0 < $CellContext`y/$CellContext`t$$ < 
         1], {$CellContext`x, -1, 2}, {$CellContext`y, -1, 1}, AspectRatio -> 
        2/3, Axes -> True, AxesLabel -> {$CellContext`x, $CellContext`y}, 
        AxesOrigin -> {0, 0}, Frame -> False, PlotLabel -> 
        MatrixForm[{{1, 0}, {0, "t"}}]], 
      "Specifications" :> {{{$CellContext`t$$, 1}, -1, 1}}, "Options" :> {}, 
      "DefaultOptions" :> {}],
     ImageSizeCache->{411., {182., 189.}},
     SingleEvaluation->True],
    Deinitialization:>None,
    DynamicModuleValues:>{},
    SynchronousInitialization->True,
    UnsavedVariables:>{Typeset`initDone$$},
    UntrackedVariables:>{Typeset`size$$}], "Manipulate",
   Deployed->True,
   StripOnInput->False],
  Manipulate`InterpretManipulate[1]]], "Output",
 CellChangeTimes->{3.671171748619607*^9}]
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
Cell[1486, 35, 1283, 38, 72, "Input"],
Cell[2772, 75, 1847, 37, 421, "Output"]
}, Open  ]]
}
]
*)

(* End of internal cache information *)

(* NotebookSignature AvDOvAvYw3GoPAKaSf5TeX1w *)
