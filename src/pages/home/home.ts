import { Component } from '@angular/core';
import { InAppBrowser, Transfer, File, FileOpener } from 'ionic-native';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { ThemeableBrowser } from 'ionic-native';
import { PDFModel } from '../../models/pdf-model';
import { LienPDF } from '../../models/lienPDF';
import { ModalController } from 'ionic-angular';
import { MenuModalPage } from '../menu-modal/menu-modal';

declare var cordova: any;
declare var AndroidNativePdfViewer: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //test:any;
  storageDirectory: string = '';
  pdf: PDFModel;
  searchQuery: string = '';
  items: LienPDF[];
  private location:string; 

  constructor(public navCtrl: NavController, public platform:Platform, public alertCtrl: AlertController, public modalCtrl: ModalController) {

    this.platform.ready().then(() => {
      //this.initializeItems();
      if(!this.platform.is('cordova')){
        return false;
      }
      //Platform check to determine storage directory prefix
        this.storageDirectory = cordova.file.externalDataDirectory;
    });
  }

  ionViewDidLoad() {
   this.initializeItems();
  }

 initializeItems() 
 {
    this.location = 'file:///storage/emulated/0/Android/data/com.ionicframework.pdfexample204467/files/';
     this.items = [ 
                   new LienPDF('Carte Générale' ,[]), 
                   new LienPDF('Points GPS',  []), 
                   new LienPDF('Horaires',  []),
                   new LienPDF('Postes Officiels Terrains', []), 
                   new LienPDF('Collège des Commissaires Sportifs',  [
                      new LienPDF('Réunion Collège Modernes', []),
                      new LienPDF('Réunion Collège VHC', [])]), 
                   new LienPDF('Chargés des Relations avec les Concurrents', [
                      new LienPDF('Programme CRAC Modernes', []),
                      new LienPDF('Programme CRAC VHC', [])]),
                   new LienPDF('Juges de Faits', [
                      new LienPDF('Programme Juges de Faits Moderne', []),
                      new LienPDF('Programme Juges de Faits VHC', [])]), 
                   new LienPDF('Additifs - Communiqués', [
                      new LienPDF('Additifs', [
                          new LienPDF('Additif 1 Moderne', []),
                          new LienPDF('Additif 2 Moderne', []),
                          new LienPDF('Additif 1 VHC', []),
                          new LienPDF('Additif 2 VHC', [])]),
                      new LienPDF('Communiqués', [
                          new LienPDF('Communiqué 1 Moderne', []),
                          new LienPDF('Communiqué 2 Moderne', []),
                          new LienPDF('Communiqué 1 VHC', []), 
                          new LienPDF('Communiqué 2 VHC', [])]), 
                   new LienPDF('FFSA', [
                      new LienPDF('Nomination d Officiels', []),
                      new LienPDF('Visa FFSA et Ligue', []),
                      new LienPDF('Règlements', [
                          new LienPDF('Règlement Moderne', []),
                          new LienPDF('Règlement VHC', [])])]),
                   new LienPDF('Arrêtés', [
                      new LienPDF('Arrêté Préfectoral', []),
                      new LienPDF('Arrêté Conseil Départemental', []),
                      new LienPDF('Plan de Déviations', []),
                      new LienPDF('Conseils Municipaux', [
                          new LienPDF('Arrêté La Rochelle', []),
                          new LienPDF('Arrêté Surgères', []),
                          new LienPDF('Arrêté Aigrefeuille', []),
                          new LienPDF('Arrêté Communes ES Base Essais', []),
                          new LienPDF('Arrêté Communes ES1', []),
                          new LienPDF('Arrêté Communes ES2', []),
                          new LienPDF('Arrêté Communes ES3', []),
                          new LienPDF('Arrêté Communes ES4', []),
                          new LienPDF('Arrêté Communes ES5', []),
                          new LienPDF('Arrêté Autres Collectivités', [])])]), 
                   new LienPDF('Assurances', [
                      new LienPDF('Assurance - Attestation', []),
                      new LienPDF('Assurance - Contrat', [])]), 
                   new LienPDF('Liaisons Téléphoniques',  [
                      new LienPDF('Annuaire 1 Sécurité Rallye PC et Terrain', []),
                      new LienPDF('Annuaire 2 Officiels Global', []),
                      new LienPDF('Annuaire 3 Commissaires', []),
                      new LienPDF('Annuaire 4 Concurrents', []),
                      new LienPDF('Annuaire 5 Organisation', []),
                      new LienPDF('Annuaire 6 Véhicules Encadrement', [])]),
                   new LienPDF('Liaisons Radios', []),
                   new LienPDF('Vérifications Administratives et Techniques', [
                      new LienPDF('Plan Accès Parc Remorques - Vérif', []),
                      new LienPDF('Vérifications Modernes Organisation', []),
                      new LienPDF('Vérifications VHC Organisation', [])]), 
                   new LienPDF('Organisation des Parcs', [
                      new LienPDF('Parc Assistance la Rochelle', []),
                      new LienPDF('Parc Regroupement - Parc Fermé La Rochelle', []),
                      new LienPDF('Parc Fermé Surgères', []),
                      new LienPDF('Pauses Gourmandes', []),
                      new LienPDF('Zone Ravitaillement Carburant', [])]), 
                   new LienPDF('Organisation des ES', [
                      new LienPDF('Organisation ES Base Essais', []),
                      new LienPDF('Organisation ES1', []),
                      new LienPDF('Organisation ES2', []),
                      new LienPDF('Organisation ES3', []),
                      new LienPDF('Organisation ES4', []),
                      new LienPDF('Organisation ES5', [])]),
                   new LienPDF('Transmission des Temps',[]),
                   new LienPDF('Retour des Documents du PC', [
                      new LienPDF('Retour des Documents Modernes au PC', []),
                      new LienPDF('Retour des Documents VHC au PC', []),
                      new LienPDF('Timing Motards', [])]), 
                   new LienPDF('Véhicules d encadrement', [
                      new LienPDF('Véhicules d encadrement Briefing', []),
                      new LienPDF('Véhicules d encadrement Consignes', []),
                      new LienPDF('Véhicules d encadrement Planning',[])]), 
                   new LienPDF('Dossier Sécurité', [
                      new LienPDF('Tableau Mise en Place Sécurité', []),
                      new LienPDF('Médecins', []),
                      new LienPDF('Ambulances', []),
                      new LienPDF('Dépanneuses', []),
                      new LienPDF('Secouristes', []),
                      new LienPDF('Gendarmerie', []),
                      new LienPDF('Courrier Divers', [])]),
                   new LienPDF('Consignes Générales', [
                      new LienPDF('Consignes Directeur D épreuves', []),
                      new LienPDF('Consignes Contrôles Horaires', []),
                      new LienPDF('Consignes Point Stop', []),
                      new LienPDF('Consignes Chronomètreurs', []),
                      new LienPDF('Consignes Commissaires Techniques Modernes', []),
                      new LienPDF('Consignes Commissaires Techniques VHC', []),
                      new LienPDF('Consignes Commissaires Parcs Regroupement', []),
                      new LienPDF('Consignes Commissaires', []),
                      new LienPDF('Consignes Cibistes Radio', [])]),
                   new LienPDF('Annexes', [
                      new LienPDF('Briefing Concurrents', []),
                      new LienPDF('Demande de Reclassement au Départ Etape 1', []),
                      new LienPDF('Engagés Modernes', []),
                      new LienPDF('Engagés VHC', [])])
                  ];
  }
 
 getItems(ev: any) {
    this.initializeItems();
    //this.test = ev.target.value; 
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  

 openAndroidPDF3(lien: LienPDF) {

 if (lien.sousMenu.length > 0) {
    //this.test = "sous menu";
    //this.items = lien.sousMenu;
   let menuModal = this.modalCtrl.create(MenuModalPage, { titre: lien.title, menu:  lien.sousMenu });
   menuModal.onDidDismiss(item => {
     console.log(item);
     if (item == null) {
      this.initializeItems();
     } else {
      this.openAndroidPDF3(item); 
     }
   });

   menuModal.present();

 } else {

   let tempTitle = lien.title.toUpperCase().replace(/[ÁÀÄÂ]/, 'A').replace(/[ÉÈËÊ]/, 'E').replace(/[ÍÌÏÎ]/, 'I').replace(/[ÓÒÖÔ]/, 'O').replace(/[ÚÙÜÛ]/, 'U');
   let tempLocation = this.location + tempTitle + '.pdf';

   //this.test = tempLocation;

    var options = {
      headerColor:"#000000",
      showScroll:true
    }

    AndroidNativePdfViewer.openPdfUrl(tempLocation, tempTitle, options,
        function(success){
    
        }, function(error){
         
      });
      
  } //else
} 

}
