Lecteur audio avec javafx-------------------------
Url     : http://codes-sources.commentcamarche.net/source/50820-lecteur-audio-avec-javafxAuteur  : puccino1erDate    : 07/08/2013
Licence :
=========

Ce document intitulé « Lecteur audio avec javafx » issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis à disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fixées par la licence, tant que cette note
apparaît clairement.

Description :
=============

C'est la version mise a jour, jetez un coup d'oeuil... Le code de cette sources 
est en javafx.
<br />Le designe est fait avec Photoshop CS4, en suite j'ai fais
 une exportation au format &quot;FXZ&quot; pour manipuler chaque calque d'une ma
niere independante et j'ai fais le code avec NetBeans 6.7.1. 
<br />Merci deja 
pour vos commentaires et suggestions.
<br /><a name='source-exemple'></a><h2> S
ource / Exemple : </h2>
<br /><pre class='code' data-mode='basic'>
/*

<ul>
 <li> Main.fx</li></ul>
 *

<ul> <li> Created on Nov 10, 2009, 12:48:32 PM
<
/li> <li>/</li></ul>

package escobarplayer11;

import javafx.scene.control.
Slider;

import javafx.scene.Scene;
import javafx.scene.effect.SepiaTone;
im
port javafx.scene.input.MouseEvent;
import javafx.scene.media.Media;
import ja
vafx.stage.Stage;
import javax.swing.JFileChooser;
import javax.swing.filechoo
ser.FileFilter;

import javafx.scene.control.ProgressBar;

import javafx.sce
ne.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.FontWe
ight;
import javafx.scene.text.Text;
import javafx.scene.text.TextOrigin;

i
mport javafx.scene.control.ProgressIndicator;

/**

<ul> <li> @author Escoba
rFx
</li> <li>/</li></ul>
 //le silder pour augmenter le volume
 var slider =
 Slider{
         max:100
         min:0
         translateX:3
         tran
slateY:105
         value:80
         width:120
         };
 //le progesse b
ar au milieu de la fenetre
var progessB = ProgressBar{
         progress:-1
 
        translateX: 7
         translateY: 72
         width: 470
        };


 //le texte pour le volume
 var txt = Text {
          content: &quot;Volum
e&quot;
          textOrigin: TextOrigin.TOP
          font: Font.font(&quot;A
rial&quot;, FontWeight.BOLD, 14)
          fill: Color.WHITE
          transla
teX:3
          translateY:90
        }
// L'indicateur du niveau de volume

var progressInd = ProgressIndicator{
        progress:bind slider.value/slider.
max
        translateX:135
        translateY:105
        }

//La boite de 
dialogue pour choisir l'audio
var sourceMedia:String = &quot;&quot;;
def exten
sions = [&quot;.mp3&quot;];
def chooser = new JFileChooser();
chooser.addChoos
ableFileFilter(
  FileFilter {
    override function getDescription() {
     
 &quot;Audio {extensions.toString()}&quot; }
    override function accept(file)
 {
      if (file.isDirectory())
        return true;
def name = file.getName
().toLowerCase();
      for (extension in extensions)
        if (name.endsWit
h(extension))
          return true;

      return false
    }
  }
);
cho
oser.setAcceptAllFileFilterUsed(false);

//le lecteur
var player = javafx.sce
ne.media.MediaPlayer {
    repeatCount: javafx.scene.media.MediaPlayer.REPEAT_F
OREVER
    media: bind Media {
        source: sourceMedia
    };
    volume
:bind slider.value+0.0
};

 class MyMediaPlayerUI extends escoplayer_1_1UI {

    override protected function contentLoaded()  {
        super.contentLoaded
();
        var s = player.media.source;
        var i = s.lastIndexOf (&quot;
/&quot;);
        if (i &gt;= 0) {
            s = s.substring (i + 1);
     
   }
      //  fileName.content = s;
    }
}

//les differents calques
var
 stage : Stage;
var ui = MyMediaPlayerUI {};
var img1 = ui.bparcour;
var img2
 = ui.bplay;
var img3 = ui.bpause;
var img4 = ui.bstop;
var img5 = ui.backgro
und;

img5.blocksMouse = true;
//bouton parcourir
img1.onMousePressed= funct
ion (event) {
        if (JFileChooser.APPROVE_OPTION == chooser.showOpenDialog
(null)) {
            sourceMedia = chooser.getSelectedFile().toURI().toString(
);
            println(&quot;---- sourceMedia = {sourceMedia}&quot;);
        
}
        }
 img1.onMouseEntered = function (e: MouseEvent){
        img1.eff
ect = SepiaTone {
                        level: 0.5
                }
      
  }
 img1.onMouseExited = function (e: MouseEvent){
        img1.effect = Sepi
aTone {
                        level: 0.0
                }
        }
// Bo
uton play
img2.onMouseClicked = function (e: MouseEvent){

        sourceMedi
a = chooser.getSelectedFile().toURI().toString();
       // txt.text = sourceMe
dia;
        player.play();
        
        }
 img2.onMouseEntered = functi
on (e: MouseEvent){
        img2.effect = SepiaTone {
                        
level: 0.5
                }
        }
 img2.onMouseExited = function (e: Mou
seEvent){
        img2.effect = SepiaTone {
                        level: 0.0

                }
        }

//bouton pause
img3.onMouseClicked = function
 (e: MouseEvent){
        player.pause();
        }
 img3.onMouseEntered = fu
nction (e: MouseEvent){
        img3.effect = SepiaTone {
                    
    level: 0.5
                }
        }
 img3.onMouseExited = function (e:
 MouseEvent){
        img3.effect = SepiaTone {
                        level:
 0.0
                }
        }

 //boutton pause
 img4.onMouseClicked = f
unction (e: MouseEvent){
        player.stop();
        }
 img4.onMouseEntere
d = function (e: MouseEvent){
        img4.effect = SepiaTone {
              
          level: 0.5
                }
        }
 img4.onMouseExited = functi
on (e: MouseEvent){
        img4.effect = SepiaTone {
                        
level: 0.0
                }
        }
 img5.onMouseEntered = function (e: Mo
useEvent){
        img5.effect = SepiaTone {
                        level: 0.
5
                }
        }
 img5.onMouseExited = function (e: MouseEvent){

        img5.effect = SepiaTone {
                        level: 0.0
       
         }
        }

stage = Stage {
    title: &quot;Escobar player 1.1&qu
ot;
    //visible: true
    resizable: false
    onClose: function() { java.l
ang.System.exit (0); }
    scene: Scene {
        content: [ui,slider,txt,prog
essB,progressInd]
    }
}

/************************************************
***********************/

/*

<ul> <li> Generated by JavaFX Production Suite
 NetBeans plugin.
</li> <li> escoplayer_1_1UI.fx</li></ul>
 *

<ul> <li> Cre
ated on Tue Nov 10 20:01:01 PST 2009
</li> <li>/</li></ul>
package escobarplay
er11;

import java.lang.*;
import javafx.scene.Node;
import javafx.fxd.FXDNo
de;

public class escoplayer_1_1UI extends FXDNode {
	
	override public var 
url = &quot;{__DIR__}escoplayer 1.1.fxz&quot;;
	
	public-read protected var ba
ckground: Node;
	public-read protected var bparcour: Node;
	public-read protec
ted var bpause: Node;
	public-read protected var bplay: Node;
	public-read pro
tected var bstop: Node;
	
	override protected function contentLoaded() : Void 
{
		background=getNode(&quot;background&quot;);
		bparcour=getNode(&quot;bparc
our&quot;);
		bpause=getNode(&quot;bpause&quot;);
		bplay=getNode(&quot;bplay&
quot;);
		bstop=getNode(&quot;bstop&quot;);
	}
	
	/**

<ul>	 <li> Check if
 some element with given id exists and write 
</li>	 <li> a warning if the elem
ent could not be found.
</li>	 <li> The whole method can be removed if such war
ning is not required.
</li>	 <li>/</li></ul>
	protected override function getO
bject( id:String) : Object {
		var obj = super.getObject(id);
		if ( obj == nu
ll) {
			System.err.println(&quot;WARNING: Element with id {id} not found in {u
rl}&quot;);
		}
		return obj;
	}
}
</pre>
