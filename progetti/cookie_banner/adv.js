
console.log("[ADV] pubblicità caricata")
try {
    analytics.registraAzione("erogazione pubblicità");
}
catch(e) {
    console.error("[ADV] errore durante il richiamo dell'analytics")
}
